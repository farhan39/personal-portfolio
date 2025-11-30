import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * ProjectsEmptyState Component
 * Empty state when no projects are available
 */
const ProjectsEmptyState = ({ 
  title = 'No Projects Found',
  description = 'There are no projects to display at the moment.',
  showCTA = true,
  isFiltered = false,
  onClearFilters,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`flex flex-col items-center justify-center py-16 md:py-24 text-center ${className}`}
    >
      {/* Icon/Illustration */}
      <div className="mb-6">
        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-[#FFF0FB] to-[#F2FDFF] border-2 border-dashed border-[#EADFF2] rounded-2xl flex items-center justify-center">
          <svg
            className="w-12 h-12 md:w-16 md:h-16 text-[#B967FF]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] font-heading mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#5A5A5A] text-base md:text-lg max-w-md mb-8">
        {description}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {isFiltered && onClearFilters && (
          <button
            onClick={onClearFilters}
            className="inline-flex items-center justify-center px-6 py-3 bg-[#FFF0FB] border-2 border-[#FF71CE] text-[#FF71CE] font-medium rounded-lg hover:bg-[#FF71CE] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2"
          >
            Clear Filters
          </button>
        )}
        {showCTA && (
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#FF71CE] to-[#B967FF] text-white font-medium rounded-lg hover:from-[#E85DB8] hover:to-[#8F3FD1] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2"
          >
            Get In Touch
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectsEmptyState

