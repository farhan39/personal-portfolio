/**
 * SkillsPreview Component
 * Skills preview grid section skeleton - structure and spacing only
 */
const SkillsPreview = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-[#FFF0FB]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="h-10 md:h-12 w-64 mx-auto bg-[#FDF7FF] border-2 border-dashed border-[#EADFF2] rounded-lg flex items-center justify-center">
            <span className="text-[#5A5A5A] text-sm">Skills & Technologies</span>
          </div>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#01CDFE] to-[#B967FF] rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="aspect-square flex flex-col items-center justify-center space-y-3 p-4 bg-[#FDF7FF] border-2 border-dashed border-[#EADFF2] rounded-xl hover:border-[#B967FF] transition-colors"
            >
              {/* Skill Icon Placeholder */}
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FFF0FB] border border-dashed border-[#EADFF2] rounded-lg"></div>
              {/* Skill Name Placeholder */}
              <div className="h-4 w-16 bg-[#FFF0FB] border border-dashed border-[#EADFF2] rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsPreview

