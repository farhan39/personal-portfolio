import { useEffect } from 'react'
import { useLayoutStore } from '../stores/useLayoutStore'
import { throttle, checkScrollThreshold } from '../utils/scrollUtils'

/**
 * Custom hook to detect scroll position and update layout store
 */
export const useScrollDetection = (threshold = 50) => {
  const setIsScrolled = useLayoutStore((state) => state.setIsScrolled)

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(checkScrollThreshold(threshold))
    }, 100)

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setIsScrolled, threshold])
}

