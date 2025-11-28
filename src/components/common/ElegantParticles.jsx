import { motion } from 'framer-motion'

/**
 * ElegantParticles Component
 * Premium particle system with elegant movement
 */
const ElegantParticles = ({ count = 15, className = '' }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2,
    color: i % 3 === 0 ? '#B967FF' : i % 3 === 1 ? '#01CDFE' : '#FF71CE',
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
            background: `radial-gradient(circle, ${particle.color}, transparent)`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.sin(particle.id) * 30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.8, 1],
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

export default ElegantParticles

