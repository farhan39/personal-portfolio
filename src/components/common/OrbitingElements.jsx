import { motion } from 'framer-motion'

/**
 * OrbitingElements Component
 * Futuristic orbiting elements animation
 */
const OrbitingElements = ({ className = '' }) => {
  const orbits = [
    { radius: 150, duration: 20, delay: 0, color: '#B967FF' },
    { radius: 200, duration: 25, delay: 5, color: '#01CDFE' },
    { radius: 120, duration: 18, delay: 10, color: '#FF71CE' },
  ]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {orbits.map((orbit, orbitIndex) => (
        <motion.div
          key={orbitIndex}
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            width: `${orbit.radius * 2}px`,
            height: `${orbit.radius * 2}px`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: orbit.duration,
            repeat: Infinity,
            delay: orbit.delay,
            ease: 'linear',
          }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: '8px',
                height: '8px',
                background: orbit.color,
                left: `${orbit.radius + Math.cos((i * 120 * Math.PI) / 180) * orbit.radius}px`,
                top: `${orbit.radius + Math.sin((i * 120 * Math.PI) / 180) * orbit.radius}px`,
                transform: 'translate(-50%, -50%)',
                boxShadow: `0 0 10px ${orbit.color}, 0 0 20px ${orbit.color}`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export default OrbitingElements

