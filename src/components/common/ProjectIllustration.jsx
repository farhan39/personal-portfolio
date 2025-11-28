import { motion } from 'framer-motion'

/**
 * ProjectIllustration Component
 * Animated project/portfolio themed illustration
 */
const ProjectIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Folder/Project icon */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.path
            d="M100 120 L100 320 L300 320 L300 180 L200 180 L200 120 Z"
            fill="url(#folderGradient)"
            stroke="#B967FF"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.path
            d="M100 120 L200 120 L200 180 L100 180 Z"
            fill="url(#folderTabGradient)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.g>

        {/* Code lines inside folder */}
        {[
          { x1: 130, x2: 270, y: 220, delay: 0.8 },
          { x1: 130, x2: 250, y: 250, delay: 1 },
          { x1: 130, x2: 230, y: 280, delay: 1.2 },
        ].map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1}
            y1={line.y}
            x2={line.x2}
            y2={line.y}
            stroke="#01CDFE"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: line.delay }}
          />
        ))}

        {/* Floating project cards */}
        {[
          { x: 50, y: 50, delay: 1.5, rotation: -10 },
          { x: 320, y: 60, delay: 1.7, rotation: 15 },
          { x: 60, y: 340, delay: 1.9, rotation: -5 },
        ].map((card, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -15, 0],
              rotate: [card.rotation, card.rotation + 5, card.rotation],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: card.delay,
              ease: 'easeInOut',
            }}
            style={{ transformOrigin: 'center' }}
          >
            <motion.rect
              x={card.x}
              y={card.y}
              width="60"
              height="40"
              rx="4"
              fill={`url(#cardGradient${i})`}
              stroke="#B967FF"
              strokeWidth="2"
            />
            <motion.circle
              cx={card.x + 10}
              cy={card.y + 10}
              r="3"
              fill="#01CDFE"
            />
            <motion.line
              x1={card.x + 20}
              y1={card.y + 10}
              x2={card.x + 50}
              y2={card.y + 10}
              stroke="#FF71CE"
              strokeWidth="2"
            />
            <motion.line
              x1={card.x + 10}
              y1={card.y + 25}
              x2={card.x + 45}
              y2={card.y + 25}
              stroke="#B967FF"
              strokeWidth="2"
            />
          </motion.g>
        ))}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="folderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF0FB" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B967FF" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="folderTabGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B967FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF71CE" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="cardGradient0" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF71CE" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#B967FF" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="cardGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B967FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#01CDFE" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="cardGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#01CDFE" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF71CE" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}

export default ProjectIllustration

