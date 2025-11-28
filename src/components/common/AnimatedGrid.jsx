import { motion } from 'framer-motion'

/**
 * AnimatedGrid Component
 * Animated grid pattern background
 */
const AnimatedGrid = ({ className = '' }) => {
  const gridLines = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    isVertical: i % 2 === 0,
    position: (i * 5) % 100,
    delay: i * 0.1,
  }))

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="w-full h-full opacity-10">
        {gridLines.map((line) => (
          <motion.line
            key={line.id}
            x1={line.isVertical ? line.position : 0}
            y1={line.isVertical ? 0 : line.position}
            x2={line.isVertical ? line.position : '100%'}
            y2={line.isVertical ? '100%' : line.position}
            stroke="#B967FF"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{
              duration: 2,
              delay: line.delay,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 3,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default AnimatedGrid

