import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import ProjectCard from '../projects/ProjectCard'
import ProjectIllustration from '../common/ProjectIllustration'
import SparkleEffect from '../common/SparkleEffect'

/**
 * FeaturedProjects Component
 * Featured projects section with project cards
 */
const FeaturedProjects = ({ data, projects = [] }) => {
  if (!data || !projects || projects.length === 0) return null

  const { title, cta } = data
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background animations */}
      <SparkleEffect count={3} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Illustration */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center lg:text-left lg:col-span-2 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] font-heading">
              {title}
            </h2>
            <div className="h-1 w-40 lg:w-32 bg-gradient-to-r from-[#FF71CE] to-[#01CDFE] rounded-full"></div>
          </motion.div>
          
          {/* Project Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center justify-center h-48"
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -10, 0] }
            }
            transition={{
              duration: 0.6,
              delay: 0.2,
              scale: { duration: 0.6 },
              y: shouldReduceMotion
                ? undefined
                : { duration: 8, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <ProjectIllustration />
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 250, damping: 22 }}
            >
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.shortDescription || project.description}
                thumbnail={project.thumbnail}
                tags={project.tags}
                slug={project.slug}
              />
            </motion.div>
          ))}
        </motion.div>

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

