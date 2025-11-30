import { useParams, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import ProjectHeader from '../components/projects/ProjectHeader'
import ScreenshotGallery from '../components/projects/ScreenshotGallery'
import YouTubeEmbed from '../components/projects/YouTubeEmbed'
import ProjectDescription from '../components/projects/ProjectDescription'
import FeatureList from '../components/projects/FeatureList'
import ProjectNavigation from '../components/projects/ProjectNavigation'
import { getAllProjects, getProjectById } from '../data/portfolioData'
import SparkleEffect from '../components/common/SparkleEffect'

/**
 * ProjectDetails Page
 * Dedicated page for viewing a single project
 */
const ProjectDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Get projects from centralized data
  const allProjects = getAllProjects()

  // Find current project
  const project = useMemo(() => {
    return getProjectById(id) || allProjects.find((p) => p.slug === `/projects/${id}`)
  }, [id, allProjects])

  // Find previous and next projects
  const { previousProject, nextProject } = useMemo(() => {
    if (!project) return { previousProject: null, nextProject: null }

    const currentIndex = allProjects.findIndex((p) => p.id === project.id)
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : null
    const nextIndex = currentIndex < allProjects.length - 1 ? currentIndex + 1 : null

    return {
      previousProject: previousIndex !== null ? allProjects[previousIndex] : null,
      nextProject: nextIndex !== null ? allProjects[nextIndex] : null,
    }
  }, [project, allProjects])

  // Handle project not found
  if (!project) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1A1A1A] font-heading mb-4">
            Project Not Found
          </h1>
          <p className="text-[#5A5A5A] mb-8">
            The project you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate('/projects')}
            className="px-6 py-3 bg-gradient-to-r from-[#FF71CE] to-[#B967FF] text-white font-medium rounded-lg hover:from-[#E85DB8] hover:to-[#8F3FD1] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2"
          >
            Back to Projects
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Background animations */}
      <SparkleEffect count={3} />
      
      <div className="relative z-10">
        {/* Project Header */}
        <ProjectHeader
        title={project.title}
        subtitle={project.subtitle}
        date={project.date}
        role={project.role}
        techStack={project.techStack}
      />

        {/* Screenshot Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="w-full py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScreenshotGallery
                images={project.screenshots}
                viewMode="grid"
              />
            </div>
          </section>
        )}

        {/* YouTube Video */}
        {project.videoId && (
          <section className="w-full py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <YouTubeEmbed
                videoId={project.videoId}
                title={`${project.title} - Video Demo`}
              />
            </div>
          </section>
        )}

        {/* Project Description */}
        <ProjectDescription description={project.description} />

        {/* Feature List */}
        <FeatureList features={project.features} />

        {/* Project Navigation */}
        <ProjectNavigation
          previousProject={previousProject}
          nextProject={nextProject}
        />
      </div>
    </div>
  )
}

export default ProjectDetails

