import { motion } from 'framer-motion'
import ContactForm from '../components/contact/ContactForm'
import SocialLinks from '../components/contact/SocialLinks'
import MapEmbed from '../components/contact/MapEmbed'
import { portfolioData } from '../data/portfolioData'
import AnimatedBlob from '../components/common/AnimatedBlob'
import AnimatedGradientMesh from '../components/common/AnimatedGradientMesh'
import FlowingWaves from '../components/common/FlowingWaves'
import ElegantParticles from '../components/common/ElegantParticles'
import SparkleEffect from '../components/common/SparkleEffect'
import OrbitingElements from '../components/common/OrbitingElements'

/**
 * Contact Page
 * Contact page with form, social links, and optional map
 */
const Contact = () => {
  const contactData = portfolioData.contact

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Premium background animations */}
      <AnimatedGradientMesh className="opacity-35" />
      <FlowingWaves className="bottom-0 opacity-20" />
      <OrbitingElements className="opacity-15" />
      <ElegantParticles count={18} className="opacity-30" />
      <AnimatedBlob 
        size="lg" 
        color="pink" 
        className="top-10 right-10 opacity-15" 
        delay={0}
      />
      <AnimatedBlob 
        size="md" 
        color="cyan" 
        className="bottom-10 left-10 opacity-10" 
        delay={1.5}
      />
      <SparkleEffect count={10} />
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full py-12 md:py-16 lg:py-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] font-heading">
              {contactData.header.title}
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#FF71CE] to-[#B967FF] rounded-full"></div>
            <p className="text-[#5A5A5A] text-lg md:text-xl max-w-2xl mx-auto mt-6">
              {contactData.header.description}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="w-full py-8 md:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Social Links & Map */}
            <div className="space-y-8">
              <SocialLinks socialLinks={contactData.socialLinks} />
              {contactData.map.enabled && (contactData.map.address || contactData.map.embedUrl) && (
                <MapEmbed mapUrl={contactData.map.embedUrl} address={contactData.map.address} />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

