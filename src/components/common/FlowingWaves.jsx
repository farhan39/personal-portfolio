import { motion } from 'framer-motion'

/**
 * FlowingWaves Component
 * Elegant flowing wave animations
 */
const FlowingWaves = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <motion.path
          d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGradient1)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 0.3,
            d: [
              'M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z',
              'M0,60 Q300,40 600,60 T1200,60 L1200,120 L0,120 Z',
              'M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.path
          d="M0,80 Q400,40 800,80 T1200,80 L1200,120 L0,120 Z"
          fill="url(#waveGradient2)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 0.2,
            d: [
              'M0,80 Q400,40 800,80 T1200,80 L1200,120 L0,120 Z',
              'M0,80 Q400,60 800,80 T1200,80 L1200,120 L0,120 Z',
              'M0,80 Q400,40 800,80 T1200,80 L1200,120 L0,120 Z',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
            ease: 'easeInOut',
          }}
        />
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B967FF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#FF71CE" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#01CDFE" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#01CDFE" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#B967FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF71CE" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default FlowingWaves

