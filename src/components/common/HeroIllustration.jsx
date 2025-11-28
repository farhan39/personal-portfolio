import { motion } from 'framer-motion'

/**
 * HeroIllustration Component
 * Animated developer/coding themed illustration
 */
const HeroIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main coding illustration */}
      <motion.svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Background circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#gradient1)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Code brackets */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.path
            d="M120 150 L100 200 L120 250"
            stroke="#B967FF"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            animate={{
              pathLength: [0, 1, 1],
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          />
          <motion.path
            d="M280 150 L300 200 L280 250"
            stroke="#01CDFE"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            animate={{
              pathLength: [0, 1, 1],
            }}
            transition={{
              duration: 1,
              delay: 1.2,
            }}
          />
        </motion.g>

        {/* Code lines */}
        {[
          { y: 180, delay: 1.4 },
          { y: 210, delay: 1.6 },
          { y: 240, delay: 1.8 },
        ].map((line, i) => (
          <motion.line
            key={i}
            x1="140"
            y1={line.y}
            x2="260"
            y2={line.y}
            stroke="#FF71CE"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: line.delay,
            }}
          />
        ))}

        {/* Floating dots */}
        {[
          { cx: 150, cy: 120, delay: 2 },
          { cx: 250, cy: 120, delay: 2.2 },
          { cx: 150, cy: 280, delay: 2.4 },
          { cx: 250, cy: 280, delay: 2.6 },
        ].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r="8"
            fill="#B967FF"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              opacity: [0, 1, 1],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 0.6,
              delay: dot.delay,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 2,
            }}
          />
        ))}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF0FB" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#B967FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#01CDFE" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: '6px',
            height: '6px',
            background: i % 2 === 0 ? '#B967FF' : '#01CDFE',
            left: `${20 + i * 10}%`,
            top: `${15 + i * 8}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default HeroIllustration

