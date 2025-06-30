import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-300 via-lime-200 to-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-end items-center p-6 md:p-8">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-black/10 bg-white/30 backdrop-blur-md hover:bg-white/50 hover:border-black/20 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Star className="h-4 w-4 text-black/70" />
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-black/10 bg-white/40 backdrop-blur-md hover:bg-white/60 hover:border-black/20 transition-all duration-300 shadow-sm hover:shadow-md px-6 py-2 font-medium text-black/80 hover:text-black"
          >
            About
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-6 md:px-8 lg:px-12 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            I've been <span className="bg-black text-white px-4 py-2 rounded-2xl inline-block">Developing</span>
            <br />
            Websites since <span className="bg-black text-white px-4 py-2 rounded-2xl inline-block">2013</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We start every new client interaction with an in-depth discovery call where we get to know each other and
            recommend the best course of action.
          </p>
        </div>

        {/* Previously Worked On Section */}
        <div className="relative">
          <div className="absolute left-0 top-8">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              PREVIOUSLY
              <br />
              WORKED ON
            </h2>
          </div>

          {/* Scattered Company Logos */}
          <div className="relative h-64 md:h-80">
            {/* awwwards */}
            <div className="absolute top-0 left-1/4 transform -translate-x-1/2">
              <div className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105">
                awwwards
              </div>
            </div>

            {/* CSS Winner */}
            <div className="absolute top-16 left-1/6">
              <div className="bg-white border border-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:scale-105">
                CSS WINNER
              </div>
            </div>

            {/* thoughtworks */}
            <div className="absolute top-8 right-1/3">
              <div className="bg-white border border-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:scale-105">
                thoughtworks
              </div>
            </div>

            {/* facebook */}
            <div className="absolute top-20 right-1/4">
              <div className="bg-white border border-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:scale-105">
                facebook
              </div>
            </div>

            {/* AUTODESK */}
            <div className="absolute bottom-16 right-1/3">
              <div className="bg-white border border-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:scale-105">
                <span className="flex items-center gap-2">
                  <span className="text-xs">▲</span>
                  AUTODESK
                </span>
              </div>
            </div>

            {/* CSS Design awards */}
            <div className="absolute bottom-0 right-8">
              <div className="bg-white border border-gray-300 px-6 py-3 rounded-full text-sm font-medium transform rotate-12 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:scale-105 hover:rotate-6">
                <span className="flex items-center gap-2">
                  <span className="font-bold">S</span>
                  CSSDesign awards
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
