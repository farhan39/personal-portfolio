import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * PageTransition Component
 * Wrapper for smooth fade/slide page transitions
 */
const PageTransition = ({ children }) => {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('entering')

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('exiting')
    }
  }, [location, displayLocation])

  useEffect(() => {
    if (transitionStage === 'exiting') {
      const timer = setTimeout(() => {
        setDisplayLocation(location)
        setTransitionStage('entering')
      }, 300) // Match transition duration

      return () => clearTimeout(timer)
    }
  }, [transitionStage, location])

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        transitionStage === 'entering'
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  )
}

export default PageTransition

