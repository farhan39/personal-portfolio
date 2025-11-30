import ProfileSection from '../components/about/ProfileSection'
import SkillsGrid from '../components/about/SkillsGrid'
import ExperienceTimeline from '../components/about/ExperienceTimeline'
import ToolsSection from '../components/about/ToolsSection'
import DownloadCVButton from '../components/about/DownloadCVButton'
import { portfolioData } from '../data/portfolioData'
import SparkleEffect from '../components/common/SparkleEffect'

/**
 * About Page
 * About page with profile, skills, experience, tools, and CV download
 */
const About = () => {
  const aboutData = portfolioData.about

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Background animations */}
      <SparkleEffect count={3} />
      {/* Profile Section */}
      <div className="relative z-10">
        <ProfileSection
          photo={aboutData.profile.photo}
          name={aboutData.profile.name}
          title={aboutData.profile.title}
          bio={aboutData.profile.bio}
        />
      </div>

      {/* Skills Grid */}
      <div className="relative z-10">
        <SkillsGrid skills={aboutData.skills} />
      </div>

      {/* Experience Timeline */}
      <div className="relative z-10">
        <ExperienceTimeline experiences={aboutData.experience} />
      </div>

      {/* Tools Section */}
      <div className="relative z-10">
        <ToolsSection tools={aboutData.tools} />
      </div>

      {/* Download CV Button */}
      <div className="relative z-10">
        <DownloadCVButton cvUrl={aboutData.cv.url} fileName={aboutData.cv.fileName} />
      </div>
    </div>
  )
}

export default About

