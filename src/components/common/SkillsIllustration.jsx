import { motion } from 'framer-motion'

/**
 * SkillsIllustration Component
 * Animated tech stack visualization
 */
const SkillsIllustration = () => {
  const techIcons = [
    { x: 50, y: 50, delay: 0 },
    { x: 150, y: 80, delay: 0.2 },
    { x: 250, y: 50, delay: 0.4 },
    { x: 100, y: 150, delay: 0.6 },
    { x: 200, y: 180, delay: 0.8 },
    { x: 50, y: 200, delay: 1 },
    { x: 250, y: 220, delay: 1.2 },
  ]

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.svg
        viewBox="0 0 300 300"
        className="w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Connecting lines */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {techIcons.slice(0, -1).map((icon, i) => (
            <motion.line
              key={`line-${i}`}
              x1={icon.x}
              y1={icon.y}
              x2={techIcons[i + 1].x}
              y2={techIcons[i + 1].y}
              stroke="#B967FF"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 + i * 0.1 }}
            />
          ))}
        </motion.g>

        {/* Tech icon circles */}
        {techIcons.map((icon, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={icon.x}
              cy={icon.y}
              r="20"
              fill={`url(#techGradient${i % 3})`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: icon.delay,
                type: 'spring',
                stiffness: 200,
              }}
            />
            <motion.circle
              cx={icon.x}
              cy={icon.y}
              r="25"
              fill="none"
              stroke="#B967FF"
              strokeWidth="2"
              strokeOpacity="0.3"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            />
          </motion.g>
        ))}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="techGradient0" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF71CE" />
            <stop offset="100%" stopColor="#B967FF" />
          </linearGradient>
          <linearGradient id="techGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B967FF" />
            <stop offset="100%" stopColor="#01CDFE" />
          </linearGradient>
          <linearGradient id="techGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#01CDFE" />
            <stop offset="100%" stopColor="#FF71CE" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}

export default SkillsIllustration

