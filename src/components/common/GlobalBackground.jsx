import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * GlobalBackground Component
 * Minimalistic, premium cyber-futuristic background animation
 * Spans the entire page with subtle, non-distracting effects
 */
const GlobalBackground = () => {
  const [canAnimate, setCanAnimate] = useState(false)

  // Disable heavy background animations on mobile or when user prefers reduced motion
  useEffect(() => {
    if (typeof window === 'undefined') return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      const isMobile = window.innerWidth < 768
      setCanAnimate(!media.matches && !isMobile)
    }

    update()
    media.addEventListener('change', update)
    window.addEventListener('resize', update)
    return () => {
      media.removeEventListener('change', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  if (!canAnimate) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[radial-gradient(circle_at_20%_40%,rgba(185,103,255,0.12),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(1,205,254,0.12),transparent_50%)]" />
    )
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(185, 103, 255, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(1, 205, 254, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(255, 113, 206, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(185, 103, 255, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#B967FF"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Flowing lines */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute"
          style={{
            width: '1px',
            height: '100%',
            background: `linear-gradient(to bottom, transparent, ${
              i === 0 ? 'rgba(185, 103, 255, 0.1)' : i === 1 ? 'rgba(1, 205, 254, 0.1)' : 'rgba(255, 113, 206, 0.1)'
            }, transparent)`,
            left: `${20 + i * 30}%`,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            background: `radial-gradient(circle, ${
              i % 3 === 0
                ? 'rgba(185, 103, 255, 0.2)'
                : i % 3 === 1
                ? 'rgba(255, 113, 206, 0.2)'
                : 'rgba(1, 205, 254, 0.2)'
            }, transparent)`,
            left: `${10 + i * 25}%`,
            top: `${20 + (i % 2) * 40}%`,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.1, 0.2, 0.15, 0.1],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            delay: i * 2,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle particle field */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: '2px',
            height: '2px',
            background: i % 3 === 0 ? '#B967FF' : i % 3 === 1 ? '#01CDFE' : '#FF71CE',
            left: `${(i * 5) % 100}%`,
            top: `${(i * 7) % 100}%`,
            opacity: 0.3,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default GlobalBackground

