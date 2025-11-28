import ProfileSection from '../components/about/ProfileSection'
import SkillsGrid from '../components/about/SkillsGrid'
import ExperienceTimeline from '../components/about/ExperienceTimeline'
import ToolsSection from '../components/about/ToolsSection'
import DownloadCVButton from '../components/about/DownloadCVButton'
import { portfolioData } from '../data/portfolioData'

/**
 * About Page
 * About page with profile, skills, experience, tools, and CV download
 */
const About = () => {
  const aboutData = portfolioData.about

  return (
    <div className="w-full min-h-screen">
      {/* Profile Section */}
      <ProfileSection
        photo={aboutData.profile.photo}
        name={aboutData.profile.name}
        title={aboutData.profile.title}
        bio={aboutData.profile.bio}
      />

      {/* Skills Grid */}
      <SkillsGrid skills={aboutData.skills} />

      {/* Experience Timeline */}
      <ExperienceTimeline experiences={aboutData.experience} />

      {/* Tools Section */}
      <ToolsSection tools={aboutData.tools} />

      {/* Download CV Button */}
      <DownloadCVButton cvUrl={aboutData.cv.url} fileName={aboutData.cv.fileName} />
    </div>
  )
}

export default About

