import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SkillSection() {
  return (
    <div className="bg-black text-white p-8 md:p-12 lg:p-16 rounded-3xl px-10 p-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
        <div className="flex-1">
          {/* Why Choose Me Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-black" />
            </div>
            <span className="text-sm font-medium">Why Choose me</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 lg:mb-0">
            My Extensive
            <br />
            List of Skills
          </h1>
        </div>

        {/* Right Side Content */}
        <div className="lg:max-w-md lg:ml-8">
          <p className="text-gray-300 text-lg mb-8 lg:mb-12">
            Building the worlds best marketing Your trusted partner for strategy, design, and dev.
          </p>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-white/20 bg-transparent hover:bg-white/10 text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-white/20 bg-transparent hover:bg-white/10 text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* HTML & CSS Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <div className="mb-6">
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Central nucleus */}
              <div className="absolute w-2 h-2 bg-lime-400 rounded-full z-10"></div>

              {/* Orbital rings */}
              <div className="absolute w-10 h-6 border border-white rounded-full"></div>
              <div className="absolute w-10 h-6 border border-white rounded-full rotate-60"></div>
              <div className="absolute w-10 h-6 border border-white rounded-full -rotate-60"></div>

              {/* Outer orbital ring */}
              <div className="absolute w-12 h-7 border border-white/60 rounded-full"></div>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3">HTML & CSS</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
          </p>
        </div>

        {/* Javascript Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <div className="mb-6">
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Central nucleus */}
              <div className="absolute w-2 h-2 bg-lime-400 rounded-full z-10"></div>

              {/* Orbital rings */}
              <div className="absolute w-10 h-6 border border-white rounded-full"></div>
              <div className="absolute w-10 h-6 border border-white rounded-full rotate-60"></div>
              <div className="absolute w-10 h-6 border border-white rounded-full -rotate-60"></div>

              {/* Outer orbital ring */}
              <div className="absolute w-12 h-7 border border-white/60 rounded-full"></div>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3">Javascript</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
          </p>
        </div>

        {/* Webflow Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 md:col-span-2 lg:col-span-1">
          <div className="mb-6">
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Central nucleus */}
              <div className="absolute w-2 h-2 bg-lime-400 rounded-full z-10"></div>

              {/* Orbital rings */}
              <div className="absolute w-10 h-6 border border-white rounded-full"></div>
              <div className="absolute w-10 h-6 border border-white rounded-full rotate-60"></div>
              <div className="absolute w-10 h-6 border border-white rounded-full -rotate-60"></div>

              {/* Outer orbital ring */}
              <div className="absolute w-12 h-7 border border-white/60 rounded-full"></div>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3">Webflow</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
          </p>
        </div>
      </div>
    </div>
  )
}
