import { motion } from 'framer-motion'

/**
 * ContactIllustration Component
 * Friendly messaging/communication illustration
 */
const ContactIllustration = () => {
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
        {/* Message bubble */}
        <motion.path
          d="M50 80 Q50 50 80 50 L220 50 Q250 50 250 80 L250 180 Q250 210 220 210 L120 210 L80 250 L80 210 Q50 210 50 180 Z"
          fill="url(#messageGradient)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Message lines */}
        {[
          { x1: 80, x2: 200, y: 100, delay: 0.8 },
          { x1: 80, x2: 180, y: 130, delay: 1 },
          { x1: 80, x2: 160, y: 160, delay: 1.2 },
        ].map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1}
            y1={line.y}
            x2={line.x2}
            y2={line.y}
            stroke="#B967FF"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: line.delay }}
          />
        ))}

        {/* Envelope */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <motion.rect
            x="100"
            y="220"
            width="100"
            height="60"
            rx="4"
            fill="url(#envelopeGradient)"
          />
          <motion.path
            d="M100 220 L150 250 L200 220"
            stroke="#01CDFE"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Floating hearts */}
        {[
          { x: 60, y: 60, delay: 2 },
          { x: 240, y: 70, delay: 2.3 },
          { x: 70, y: 250, delay: 2.6 },
        ].map((heart, i) => (
          <motion.g key={i}>
            <motion.path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#FF71CE"
              transform={`translate(${heart.x - 12}, ${heart.y - 12}) scale(0.8)`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 0.8, opacity: 1 }}
              viewport={{ once: true }}
            />
          </motion.g>
        ))}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="messageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF0FB" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B967FF" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="envelopeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F2FDFF" />
            <stop offset="100%" stopColor="#01CDFE" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}

export default ContactIllustration

