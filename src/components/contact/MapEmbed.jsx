import { motion } from 'framer-motion'

/**
 * MapEmbed Component
 * Optional map embed for location
 */
const MapEmbed = ({
  mapUrl,
  address,
  className = '',
}) => {
  if (!mapUrl && !address) {
    return null
  }

  // Generate Google Maps embed URL from address if mapUrl not provided
  const getMapEmbedUrl = () => {
    if (mapUrl) return mapUrl
    
    if (address) {
      const encodedAddress = encodeURIComponent(address)
      return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}`
    }
    
    return null
  }

  const embedUrl = getMapEmbedUrl()

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`w-full ${className}`}
    >
      <div className="bg-[#FDF7FF] border-2 border-[#EADFF2] rounded-2xl p-6 md:p-8 lg:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] font-heading mb-6">
          Location
        </h2>
        
        {address && (
          <p className="text-[#5A5A5A] text-base md:text-lg mb-6">
            {address}
          </p>
        )}

        {embedUrl ? (
          <div className="aspect-video w-full overflow-hidden rounded-xl border-2 border-[#EADFF2]">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className="aspect-video w-full bg-[#FFF0FB] border-2 border-dashed border-[#EADFF2] rounded-xl flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-16 h-16 mx-auto text-[#B967FF] mb-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-[#5A5A5A] text-base">Map not available</p>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  )
}

export default MapEmbed

