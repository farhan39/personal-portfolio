import { motion } from 'framer-motion'

/**
 * FloatingElements Component
 * Animated floating geometric shapes
 */
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${20 + i * 15}px`,
            height: `${20 + i * 15}px`,
            background: `linear-gradient(135deg, ${
              i % 2 === 0 ? 'rgba(185, 103, 255, 0.1)' : 'rgba(1, 205, 254, 0.1)'
            }, ${
              i % 2 === 0 ? 'rgba(255, 113, 206, 0.1)' : 'rgba(185, 103, 255, 0.1)'
            })`,
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating squares */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`square-${i}`}
          className="absolute"
          style={{
            width: `${15 + i * 10}px`,
            height: `${15 + i * 10}px`,
            background: `linear-gradient(135deg, rgba(255, 113, 206, 0.15), rgba(1, 205, 254, 0.15))`,
            borderRadius: '8px',
            right: `${15 + i * 20}%`,
            bottom: `${10 + i * 15}%`,
          }}
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i * 2,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default FloatingElements

