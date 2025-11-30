import { motion } from 'framer-motion'

/**
 * AnimatedBlob Component
 * Floating animated blob shape for decorative purposes
 */
const AnimatedBlob = ({ 
  className = '', 
  size = 'md',
  color = 'purple',
  delay = 0 
}) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48 md:w-64 md:h-64',
    lg: 'w-72 h-72 md:w-96 md:h-96',
  }

  const colorGradients = {
    purple: 'from-[#B967FF]/30 via-[#FF71CE]/20 to-[#01CDFE]/30',
    pink: 'from-[#FF71CE]/30 via-[#B967FF]/20 to-[#FFF0FB]/30',
    cyan: 'from-[#01CDFE]/30 via-[#66E4FF]/20 to-[#B967FF]/30',
  }

  return (
    <motion.div
      className={`absolute ${sizeClasses[size]} ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
        borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
      style={{
        background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
        filter: 'blur(40px)',
      }}
    >
      <div className={`w-full h-full bg-gradient-to-br ${colorGradients[color]} rounded-full`} />
    </motion.div>
  )
}

export default AnimatedBlob

