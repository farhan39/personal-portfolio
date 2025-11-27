import { motion } from 'framer-motion'

/**
 * ProjectHeader Component
 * Header section with title, subtitle, and metadata
 */
const ProjectHeader = ({
  title,
  subtitle,
  date,
  role,
  techStack = [],
  className = '',
}) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`w-full py-8 md:py-12 lg:py-16 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] font-heading">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-[#5A5A5A]">
                {subtitle}
              </p>
            )}
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-[#FF71CE] to-[#B967FF] rounded-full"></div>
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-4">
            {date && (
              <div className="flex items-center gap-2">
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
                <span className="text-[#5A5A5A] text-sm md:text-base">{date}</span>
              </div>
            )}

            {role && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#01CDFE]"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-[#5A5A5A] text-sm md:text-base">{role}</span>
              </div>
            )}

            {techStack && techStack.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[#5A5A5A] text-sm md:text-base font-medium">Tech:</span>
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs md:text-sm bg-[#F2FDFF] border border-[#EADFF2] text-[#5A5A5A] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default ProjectHeader

