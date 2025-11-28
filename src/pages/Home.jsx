import { useMemo } from 'react'
import HeroSection from '../components/home/HeroSection'
import SkillsPreview from '../components/home/SkillsPreview'
import FeaturedProjects from '../components/home/FeaturedProjects'
import ContactCTA from '../components/home/ContactCTA'
import { portfolioData, getFeaturedProjects } from '../data/portfolioData'

/**
 * Home Page
 * Main landing page with all sections
 */
const Home = () => {
  const homeData = portfolioData.home
  const featuredProjects = useMemo(() => getFeaturedProjects(), [])

  return (
    <div className="w-full">
      {/* Hero Section with integrated About Me content */}
      <HeroSection data={homeData.hero} aboutData={homeData.about} />

      {/* Skills Preview Section */}
      <SkillsPreview data={homeData.skills} />

      {/* Featured Projects Section */}
      <FeaturedProjects data={homeData.featuredProjects} projects={featuredProjects} />

      {/* Contact CTA Footer Strip */}
      <ContactCTA data={homeData.contactCTA} />
    </div>
  )
}

export default Home

