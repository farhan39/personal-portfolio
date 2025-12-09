import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * ScrollProgressBar
 * Top-aligned progress indicator powered by GSAP.
 * Lightweight: uses rAF batching and passive scroll listener.
 */
const ScrollProgressBar = () => {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    let raf = null
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? (window.scrollY / max) * 100 : 0
      gsap.to(bar, {
        width: `${progress}%`,
        duration: 0.2,
        ease: 'power2.out',
        overwrite: true,
      })
      raf = null
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-0 bg-gradient-to-r from-[#FF71CE] via-[#B967FF] to-[#01CDFE] shadow-[0_0_10px_rgba(185,103,255,0.35)]"
      />
    </div>
  )
}

export default ScrollProgressBar


