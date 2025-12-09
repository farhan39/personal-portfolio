import { useEffect, useRef } from 'react'
import { useSpring, animated } from '@react-spring/web'

/**
 * MagneticButton
 * Lightweight magnetic hover/tap wrapper for CTA-style elements.
 * Uses spring-based transforms; honors prefers-reduced-motion.
 */
const MagneticButton = ({ children, strength = 10, className = '' }) => {
  const ref = useRef(null)
  const prefersReduced = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  const [styles, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    config: { mass: 1, tension: 260, friction: 18 },
  }))

  const reset = () => api.start({ x: 0, y: 0, scale: 1 })

  const handleMove = (event) => {
    if (prefersReduced) return
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    const clamp = (value, max) => Math.max(Math.min(value, max), -max)

    api.start({
      x: clamp(x / strength, 10),
      y: clamp(y / strength, 10),
      scale: 1.02,
    })
  }

  const handleLeave = () => {
    if (prefersReduced) return
    reset()
  }

  const handleTouch = () => {
    // Brief pulse on tap for mobile
    if (prefersReduced) return
    api.start({ scale: 1.04 }).then(() => api.start({ scale: 1 }))
  }

  useEffect(() => {
    if (prefersReduced) {
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReduced])

  return (
    <animated.div
      ref={ref}
      className={`inline-block ${className}`}
      style={styles}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onTouchStart={handleTouch}
    >
      {children}
    </animated.div>
  )
}

export default MagneticButton


