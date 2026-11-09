import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * ProjectCard Component
 * Reusable project card with thumbnail, title, description, tags, and animations
 */
const ProjectCard = ({ 
  id,
  title,
  description,
  thumbnail,
  tags = [],
  slug,
  className = '',
}) => {
  const projectPath = slug || `/projects/${id}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`group flex flex-col bg-[#FDF7FF] border-2 border-[#EADFF2] rounded-2xl overflow-hidden hover:border-[#B967FF] transition-all duration-300 shadow-md hover:shadow-xl ${className}`}
    >
      <Link
        to={projectPath}
        className="flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2 rounded-2xl"
      >
        {/* Thumbnail / Screenshot */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#FFF0FB]">
          {thumbnail ? (
            <motion.img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FFF0FB] to-[#F2FDFF]">
              <span className="text-[#5A5A5A] text-sm">No Image</span>
            </div>
          )}
          
          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/40 to-transparent flex items-end justify-center p-4"
          >
            <motion.span
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              className="text-white text-sm font-medium"
            >
              View Project →
            </motion.span>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] font-heading group-hover:text-[#B967FF] transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Description: the wrapper takes the spare height so the clamped <p> stays exactly 3 lines */}
          <div className="flex-1">
            <p className="text-[#5A5A5A] text-sm md:text-base line-clamp-3">
              {description}
            </p>
          </div>

          {/* Tags / Tech Stack */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.slice(0, 4).map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1 text-xs md:text-sm bg-[#F2FDFF] border border-[#EADFF2] text-[#5A5A5A] rounded-full hover:bg-[#E3C8FF] hover:border-[#B967FF] transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
              {tags.length > 4 && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="px-3 py-1 text-xs md:text-sm bg-[#F2FDFF] border border-[#EADFF2] text-[#5A5A5A] rounded-full"
                >
                  +{tags.length - 4}
                </motion.span>
              )}
            </div>
          )}

          {/* Project Links (Optional - can be shown on hover) */}
          <div className="flex gap-4 pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="h-8 w-20 bg-[#FFF0FB] border border-[#FF71CE] rounded-lg flex items-center justify-center">
              <span className="text-[#5A5A5A] text-xs">Live</span>
            </div>
            <div className="h-8 w-20 bg-[#F2FDFF] border border-[#01CDFE] rounded-lg flex items-center justify-center">
              <span className="text-[#5A5A5A] text-xs">Code</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectCard

