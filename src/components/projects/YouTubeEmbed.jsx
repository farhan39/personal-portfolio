import { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * YouTubeEmbed Component
 * Responsive YouTube video embed with 16:9 aspect ratio
 */
const YouTubeEmbed = ({
  videoId,
  title = 'Video',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false)

  if (!videoId) {
    return (
      <div className={`w-full ${className}`}>
        <div className="aspect-video bg-[#FFF0FB] border-2 border-dashed border-[#EADFF2] rounded-2xl flex items-center justify-center">
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
              <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <p className="text-[#5A5A5A] text-base">No video available</p>
          </div>
        </div>
      </div>
    )
  }

  // Extract video ID from URL if full URL is provided
  const extractVideoId = (id) => {
    if (id.includes('youtube.com') || id.includes('youtu.be')) {
      const match = id.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)
      return match ? match[1] : id
    }
    return id
  }

  const embedId = extractVideoId(videoId)
  const embedUrl = `https://www.youtube.com/embed/${embedId}`

  if (hasError) {
    return (
      <div className={`w-full ${className}`}>
        <div className="aspect-video bg-[#FFF0FB] border-2 border-dashed border-[#EADFF2] rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <svg
              className="w-16 h-16 mx-auto text-[#FF71CE] mb-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-[#5A5A5A] text-base mb-2">Failed to load video</p>
            <a
              href={`https://www.youtube.com/watch?v=${embedId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF71CE] hover:text-[#B967FF] underline text-sm"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`w-full ${className}`}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#1A1A1A] border-2 border-[#EADFF2]">
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onError={() => setHasError(true)}
        />
      </div>
    </motion.div>
  )
}

export default YouTubeEmbed

