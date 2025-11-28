import ProfileSection from '../components/about/ProfileSection'
import SkillsGrid from '../components/about/SkillsGrid'
import ExperienceTimeline from '../components/about/ExperienceTimeline'
import ToolsSection from '../components/about/ToolsSection'
import DownloadCVButton from '../components/about/DownloadCVButton'
import { portfolioData } from '../data/portfolioData'
import AnimatedBlob from '../components/common/AnimatedBlob'
import AnimatedGradientMesh from '../components/common/AnimatedGradientMesh'
import ElegantParticles from '../components/common/ElegantParticles'
import SparkleEffect from '../components/common/SparkleEffect'
import OrbitingElements from '../components/common/OrbitingElements'
import FlowingWaves from '../components/common/FlowingWaves'

/**
 * About Page
 * About page with profile, skills, experience, tools, and CV download
 */
const About = () => {
  const aboutData = portfolioData.about

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Premium background animations */}
      <AnimatedGradientMesh className="opacity-30" />
      <OrbitingElements className="opacity-15" />
      <ElegantParticles count={22} className="opacity-25" />
      <FlowingWaves className="bottom-0 opacity-15" />
      <AnimatedBlob 
        size="lg" 
        color="purple" 
        className="top-20 -left-40 opacity-10" 
        delay={0}
      />
      <AnimatedBlob 
        size="md" 
        color="pink" 
        className="bottom-20 -right-40 opacity-10" 
        delay={2}
      />
      <SparkleEffect count={8} />
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

