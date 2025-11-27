/**
 * ContactCTA Component
 * Contact CTA footer strip skeleton - structure and spacing only
 */
const ContactCTA = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-r from-[#FFF0FB] via-[#FDF7FF] to-[#F2FDFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* CTA Content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="h-8 md:h-10 w-full md:w-3/4 bg-[#FDF7FF] border-2 border-dashed border-[#EADFF2] rounded-lg flex items-center px-4 mx-auto md:mx-0">
              <span className="text-[#5A5A5A] text-sm">Ready to work together?</span>
            </div>
            <div className="h-6 w-full md:w-2/3 bg-[#FDF7FF] border border-dashed border-[#EADFF2] rounded-lg mx-auto md:mx-0"></div>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <div className="h-12 md:h-14 w-48 md:w-56 bg-gradient-to-r from-[#FF71CE] to-[#B967FF] rounded-lg shadow-lg border-2 border-[#B967FF] flex items-center justify-center">
              <span className="text-white text-sm font-medium">Get In Touch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA

