import { motion } from 'framer-motion'

/**
 * SkillsGrid Component
 * Grid display of skills with icons and proficiency levels
 */
const SkillsGrid = ({
  skills = [],
  className = '',
}) => {
  if (!skills || skills.length === 0) {
    return null
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className={`w-full py-12 md:py-16 lg:py-20 bg-[#FFF0FB]/30 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] font-heading mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#01CDFE] to-[#B967FF] rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center justify-center p-4 md:p-6 bg-[#FDF7FF] border-2 border-dotted border-[#EADFF2] rounded-xl hover:border-[#B967FF] transition-all duration-300 cursor-default group"
            >
              {/* Skill Icon */}
              <div className="w-12 h-12 md:w-16 md:h-16 mb-3 flex items-center justify-center bg-gradient-to-br from-[#FFF0FB] to-[#F2FDFF] rounded-lg group-hover:from-[#FF71CE] group-hover:to-[#B967FF] transition-all duration-300">
                {skill.icon ? (
                  <span className="text-2xl md:text-3xl">{skill.icon}</span>
                ) : (
                  <div className="w-8 h-8 bg-[#B967FF] rounded"></div>
                )}
              </div>

              {/* Skill Name */}
              <h3 className="text-sm md:text-base font-semibold text-[#1A1A1A] text-center mb-1">
                {skill.name}
              </h3>

              {/* Proficiency Level (Optional) */}
              {skill.level && (
                <div className="w-full mt-2">
                  <div className="h-1.5 bg-[#EADFF2] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-[#FF71CE] to-[#B967FF] rounded-full"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default SkillsGrid

