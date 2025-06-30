import { Star } from "lucide-react"

export default function About() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url()",
        backgroundSize: "cover",
        backgroundPosition: "top left",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navigation */}
      <nav className="flex justify-end items-center pt-6 pr-8">
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-full border border-gray-400 bg-white flex items-center justify-center">
            <Star className="h-3.5 w-3.5 text-black fill-black" />
          </button>
          <button className="px-5 py-2 rounded-full border border-gray-400 bg-white text-black text-sm font-medium">
            About
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="px-4 pt-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6 text-black">
            I've been <span className="bg-black text-white px-5 py-2 rounded-2xl inline-block mx-1">Developing</span>
            <br />
            Websites since <span className="bg-black text-white px-5 py-2 rounded-2xl inline-block mx-1">2013</span>
          </h1>

          <p className="text-lg text-black max-w-xl mx-auto leading-relaxed mt-8">
            We start every new client interaction with an in-depth discovery call where we get
            <br />
            to know each other and recommend the best course of action.
          </p>
        </div>

        {/* Previously Worked On Section */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 top-4">
            <h2 className="text-xl font-bold text-black leading-tight">
              PREVIOUSLY
              <br />
              WORKED ON
            </h2>
          </div>

          {/* Company Logos - Exact positioning */}
          <div className="relative h-64 ml-32">
            {/* awwwards - top center */}
            <div className="absolute top-2 left-32">
              <div className="bg-black text-white px-6 py-3 rounded-full text-sm">awwwards</div>
            </div>

            {/* CSS WINNER - left side */}
            <div className="absolute top-12 left-8">
              <div className="bg-white border border-gray-400 px-6 py-3 rounded-full text-sm font-medium">
                CSS WINNER
              </div>
            </div>

            {/* thoughtworks - center */}
            <div className="absolute top-16 left-48">
              <div className="bg-white border border-gray-400 px-6 py-3 rounded-full text-sm">thoughtworks</div>
            </div>

            {/* facebook - top right */}
            <div className="absolute top-4 right-32">
              <div className="bg-white border border-gray-400 px-6 py-3 rounded-full text-sm">facebook</div>
            </div>

            {/* AUTODESK - bottom center */}
            <div className="absolute bottom-8 right-24">
              <div className="bg-white border border-gray-400 px-6 py-3 rounded-full text-sm font-medium">
                <span className="flex items-center gap-1">
                  <span className="text-xs">▲</span>
                  AUTODESK
                </span>
              </div>
            </div>

            {/* CSSDesign Awards - bottom right, rotated */}
            <div className="absolute bottom-2 right-4">
              <div className="bg-white border border-gray-400 px-6 py-3 rounded-full text-sm transform rotate-12">
                <span className="flex items-center gap-1">
                  <span className="font-bold">S</span>
                  <span>CSSDesign</span>
                  <span className="font-medium">Awards</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
