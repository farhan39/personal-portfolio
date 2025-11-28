import { motion } from 'framer-motion'

/**
 * SparkleEffect Component
 * Twinkling sparkle effects
 */
const SparkleEffect = ({ count = 8, className = '' }) => {
  const sparkles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 1 + 1.5,
  }))

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: 'easeInOut',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8L10 0Z"
              fill="url(#sparkleGradient)"
            />
            <defs>
              <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF71CE" />
                <stop offset="50%" stopColor="#B967FF" />
                <stop offset="100%" stopColor="#01CDFE" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

export default SparkleEffect

