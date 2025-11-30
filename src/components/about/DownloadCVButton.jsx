import { motion } from 'framer-motion'

/**
 * DownloadCVButton Component
 * Download CV/Resume button
 */
const DownloadCVButton = ({
  cvUrl,
  fileName = 'resume.pdf',
  className = '',
}) => {
  const handleDownload = () => {
    if (cvUrl) {
      const link = document.createElement('a')
      link.href = cvUrl
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`w-full py-12 md:py-16 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!cvUrl}
            className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF71CE] to-[#B967FF] text-white font-semibold text-lg rounded-lg hover:from-[#E85DB8] hover:to-[#8F3FD1] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#B967FF] focus:ring-offset-2 ${
              !cvUrl ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download CV</span>
          </motion.button>

          {!cvUrl && (
            <p className="mt-4 text-sm text-[#5A5A5A] text-center">
              CV link not available
            </p>
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default DownloadCVButton

