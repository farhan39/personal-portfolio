import { motion } from 'framer-motion'

/**
 * ProfileSection Component
 * Profile photo and bio section
 */
const ProfileSection = ({
  photo,
  name,
  title,
  bio = [],
  className = '',
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`w-full py-12 md:py-16 lg:py-20 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-dotted border-[#EADFF2] rounded-3xl bg-white/60 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-24 lg:gap-32 items-start">
          {/* Profile Photo */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative"
            >
              <div className="w-48 h-48 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-[#EADFF2] shadow-lg bg-gradient-to-br from-[#FFF0FB] to-[#F2FDFF]">
                {photo ? (
                  <img
                    src={photo}
                    alt={name || 'Profile'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-[#B967FF]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
              {/* Decorative gradient border effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FF71CE] via-[#B967FF] to-[#01CDFE] rounded-2xl opacity-20 blur-xl -z-10"></div>
            </motion.div>
          </div>

          {/* Bio Content */}
          <div className="md:col-span-2 space-y-6">
            {name && (
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] font-heading mb-2">
                  {name}
                </h1>
                {title && (
                  <p className="text-xl md:text-2xl text-[#5A5A5A] mb-4">
                    {title}
                  </p>
                )}
                <div className="h-1 w-24 bg-gradient-to-r from-[#FF71CE] to-[#B967FF] rounded-full"></div>
              </div>
            )}

            {/* Bio Paragraphs */}
            <div className="space-y-4">
              {bio && bio.length > 0 ? (
                bio.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="text-[#5A5A5A] text-base md:text-lg leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))
              ) : (
                <p className="text-[#5A5A5A] text-base md:text-lg leading-relaxed">
                  Welcome to my portfolio! I'm a passionate developer who loves creating
                  beautiful and functional web applications.
                </p>
              )}
            </div>
          </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ProfileSection

