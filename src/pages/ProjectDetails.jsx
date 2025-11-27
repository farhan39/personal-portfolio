import { useParams, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import ProjectHeader from '../components/projects/ProjectHeader'
import ScreenshotGallery from '../components/projects/ScreenshotGallery'
import YouTubeEmbed from '../components/projects/YouTubeEmbed'
import ProjectDescription from '../components/projects/ProjectDescription'
import FeatureList from '../components/projects/FeatureList'
import ProjectLinks from '../components/projects/ProjectLinks'
import ProjectNavigation from '../components/projects/ProjectNavigation'

/**
 * ProjectDetails Page
 * Dedicated page for viewing a single project
 */
const ProjectDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Mock projects data - Replace with actual data fetching
  const allProjects = useMemo(() => [
    {
      id: '1',
      title: 'E-Commerce Platform',
      subtitle: 'A modern e-commerce solution',
      date: 'January 2024',
      role: 'Full-Stack Developer',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      description: 'A comprehensive e-commerce platform built with modern web technologies. This project features a complete shopping experience with user authentication, product management, shopping cart, payment integration, and an admin dashboard for managing orders and inventory.',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and checkout process',
        'Payment integration with Stripe',
        'Admin dashboard for order management',
        'Real-time inventory tracking',
        'Order history and tracking',
        'Email notifications',
      ],
      screenshots: [
        '/screenshots/ecommerce-1.jpg',
        '/screenshots/ecommerce-2.jpg',
        '/screenshots/ecommerce-3.jpg',
      ],
      videoId: 'dQw4w9WgXcQ', // Replace with actual video ID
      githubUrl: 'https://github.com/username/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.example.com',
      tags: ['E-Commerce', 'Full-Stack', 'Payment'],
      category: 'Web Application',
      slug: '/projects/ecommerce-platform',
    },
    {
      id: '2',
      title: 'Mobile Weather App',
      subtitle: 'Beautiful weather forecasts',
      date: 'December 2023',
      role: 'Mobile Developer',
      techStack: ['React Native', 'TypeScript', 'OpenWeather API'],
      description: 'A beautiful and intuitive weather application for mobile devices. Features real-time weather forecasts, location-based weather, detailed hourly and daily forecasts, and beautiful animations.',
      features: [
        'Real-time weather updates',
        'Location-based forecasts',
        'Hourly and daily forecasts',
        'Beautiful UI animations',
        'Weather alerts and notifications',
        'Multiple location support',
      ],
      screenshots: [
        '/screenshots/weather-1.jpg',
        '/screenshots/weather-2.jpg',
      ],
      videoId: null,
      githubUrl: 'https://github.com/username/weather-app',
      liveUrl: null,
      tags: ['Mobile', 'Weather', 'API'],
      category: 'Mobile Application',
      slug: '/projects/weather-app',
    },
    {
      id: '3',
      title: 'Portfolio Website',
      subtitle: 'Modern portfolio showcase',
      date: 'November 2023',
      role: 'Frontend Developer',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      description: 'A modern, responsive portfolio website showcasing my work and skills. Built with React and Tailwind CSS, featuring smooth animations and a clean, professional design.',
      features: [
        'Responsive design',
        'Smooth animations',
        'Project showcase',
        'Contact form',
        'Dark mode support',
        'SEO optimized',
      ],
      screenshots: [],
      videoId: null,
      githubUrl: 'https://github.com/username/portfolio',
      liveUrl: 'https://portfolio.example.com',
      tags: ['Portfolio', 'Design', 'Responsive'],
      category: 'Web Application',
      slug: '/projects/portfolio',
    },
  ], [])

  // Find current project
  const project = useMemo(() => {
    return allProjects.find((p) => p.id === id || p.slug === `/projects/${id}`)
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
    <div className="w-full min-h-screen">
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

      {/* Project Links */}
      <ProjectLinks
        githubUrl={project.githubUrl}
        liveUrl={project.liveUrl}
        otherLinks={project.otherLinks}
      />

      {/* Project Navigation */}
      <ProjectNavigation
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </div>
  )
}

export default ProjectDetails

