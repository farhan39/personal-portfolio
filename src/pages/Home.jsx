import HeroSection from '../components/home/HeroSection'
import AboutPreview from '../components/home/AboutPreview'
import SkillsPreview from '../components/home/SkillsPreview'
import FeaturedProjects from '../components/home/FeaturedProjects'
import ContactCTA from '../components/home/ContactCTA'

/**
 * Home Page
 * Main landing page with all sections
 */
const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* About Preview Section */}
      <AboutPreview />

      {/* Skills Preview Section */}
      <SkillsPreview />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Contact CTA Footer Strip */}
      <ContactCTA />
    </div>
  )
}

export default Home

