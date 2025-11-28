import { motion } from 'framer-motion'

/**
 * AnimatedGradientMesh Component
 * Premium animated gradient mesh background
 */
const AnimatedGradientMesh = ({ className = '' }) => {
  const gradients = [
    { x: '0%', y: '0%', color: 'rgba(185, 103, 255, 0.2)' },
    { x: '100%', y: '0%', color: 'rgba(255, 113, 206, 0.15)' },
    { x: '50%', y: '100%', color: 'rgba(1, 205, 254, 0.2)' },
    { x: '0%', y: '50%', color: 'rgba(185, 103, 255, 0.1)' },
    { x: '100%', y: '50%', color: 'rgba(1, 205, 254, 0.15)' },
  ]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {gradients.map((gradient, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: '400px',
            height: '400px',
            background: `radial-gradient(circle, ${gradient.color}, transparent)`,
            left: gradient.x,
            top: gradient.y,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.1, 0.3, 0.2, 0.1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            delay: i * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedGradientMesh

