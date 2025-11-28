import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProjectCard from '../projects/ProjectCard'

/**
 * FeaturedProjects Component
 * Featured projects section with project cards
 */
const FeaturedProjects = ({ data, projects = [] }) => {
  if (!data || !projects || projects.length === 0) return null

  const { title, cta } = data

  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] font-heading">
            {title}
          </h2>
          <div className="h-1 w-40 mx-auto bg-gradient-to-r from-[#FF71CE] to-[#01CDFE] rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.shortDescription || project.description}
              thumbnail={project.thumbnail}
              tags={project.tags}
              slug={project.slug}
            />
          ))}
        </div>

        {/* View All Projects CTA */}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mt-12 md:mt-16"
          >
            <Link
              to={cta.link}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF71CE] to-[#B967FF] text-white font-semibold rounded-lg hover:from-[#E85DB8] hover:to-[#8F3FD1] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2"
            >
              {cta.text}
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default FeaturedProjects

