import { motion } from 'framer-motion'

/**
 * AnimatedParticles Component
 * Floating particle effects for background decoration
 */
const AnimatedParticles = ({ count = 15, className = '' }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }))

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle, ${
              particle.id % 3 === 0
                ? 'rgba(185, 103, 255, 0.4)'
                : particle.id % 3 === 1
                ? 'rgba(255, 113, 206, 0.4)'
                : 'rgba(1, 205, 254, 0.4)'
            }, transparent)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedParticles

