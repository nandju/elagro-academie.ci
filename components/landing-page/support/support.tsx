import { Zap } from "lucide-react"

export default function Banner() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-[#001A3B]/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start items-center justify-center gap-2 flex-wrap">
          {/* Icon */}
          <div className="w-12 h-12 bg-[#001A3B] rounded-full flex items-center justify-center flex-shrink-0 relative bottom-0 md:bottom-4">
            <Zap className="w-6 h-6 text-[#E0AB6C]" />
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-end md:gap-10 gap-2 flex-wrap md:justify-start justify-center">
            {/* Text content */}
          <div className="flex flex-col md:items-start items-center gap-2 flex-wrap md:justify-start justify-center">
            <span className="text-[#001A3B] text-sm sm:text-base font-medium">
              Nous pouvons vous aider
            </span>
            <h3 className="text-[#001A3B] font-semibold text-base sm:text-lg">
              Trouvez la Formation Idéale
            </h3>
          </div>
          
          {/* Button */}
          <button className="bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-[#001A3B] font-semibold px-6 py-2 rounded-md transition-colors duration-200 flex-shrink-0">
            Commencer
          </button>
        </div>
          </div>
          
          
      </div>
    </section>
  )
}