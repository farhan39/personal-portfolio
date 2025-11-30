import { motion } from 'framer-motion'

/**
 * ExperienceTimeline Component
 * Timeline display of work experience
 */
const ExperienceTimeline = ({
  experiences = [],
  className = '',
}) => {
  if (!experiences || experiences.length === 0) {
    return null
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className={`w-full py-12 md:py-16 lg:py-20 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] font-heading mb-4">
            Experience
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#FF71CE] to-[#01CDFE] rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF71CE] via-[#B967FF] to-[#01CDFE] transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-[#FF71CE] to-[#B967FF] border-4 border-[#FDF7FF] shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white"></div>
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 bg-[#FDF7FF] border-2 border-dotted border-[#EADFF2] rounded-xl p-6 md:p-8 hover:border-[#B967FF] transition-all duration-300 ${
                    index % 2 === 0 ? 'md:mr-auto md:max-w-[45%]' : 'md:ml-auto md:max-w-[45%]'
                  }`}
                >
                  {/* Date */}
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      className="w-5 h-5 text-[#B967FF]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm md:text-base text-[#5A5A5A] font-medium">
                      {exp.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] font-heading mb-2">
                    {exp.title}
                  </h3>

                  {/* Company */}
                  <p className="text-lg md:text-xl text-[#5A5A5A] mb-4">
                    {exp.company}
                  </p>

                  {/* Description */}
                  {exp.description && (
                    <p className="text-[#5A5A5A] text-sm md:text-base leading-relaxed mb-4">
                      {exp.description}
                    </p>
                  )}

                  {/* Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[#EADFF2]">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs md:text-sm bg-[#F2FDFF] border border-[#EADFF2] text-[#5A5A5A] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ExperienceTimeline

