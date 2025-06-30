export default function Worked() {
  return (
    <div className="">
      <div className="">
        <div className="relative flex flex-col items-center justify-center px-4 py-16 md:py-24 lg:py-32 bg-gray-100">
          {/* Main heading */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              PREVIOUSLY
              <br />
              WORKED ON
            </h2>
          </div>

          {/* Logo containers arranged organically */}
          <div className="relative">
            {/* awwwards - top left */}
            <div className="absolute top-0 left-64 transform -rotate-12">
              <div className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium">awwwards.</div>
            </div>

            {/* CSS Winner - bottom left */}
            <div className="absolute top-20 left-32 transform rotate-6">
              <div className="bg-white text-gray-900 px-6 py-3 rounded-full text-base font-medium border border-gray-200">
                CSS WINNER
              </div>
            </div>

            {/* thoughtworks - center */}
            <div className="absolute top-12 left-96 transform -rotate-3">
              <div className="bg-white text-gray-900 px-6 py-3 rounded-full text-base font-medium border border-gray-200">
                /thoughtworks
              </div>
            </div>

            {/* facebook - top right */}
            <div className="absolute top-4 right-64 transform rotate-12">
              <div className="bg-white text-gray-900 px-6 py-3 rounded-full text-base font-medium border border-gray-200">
                facebook
              </div>
            </div>

            {/* AUTODESK - bottom center */}
            <div className="absolute top-32 right-48 transform -rotate-6">
              <div className="bg-white text-gray-900 px-6 py-3 rounded-full text-base font-medium border border-gray-200">
                <span className="flex items-center gap-2">
                  <span className="text-orange-500">▲</span>
                  AUTODESK
                </span>
              </div>
            </div>

            {/* CSSDesignAwards - top right corner */}
            <div className="absolute -top-4 right-8 transform rotate-45">
              <div className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  CSSDesignAwards
                </span>
              </div>
            </div>

            {/* Spacer to ensure proper height */}
            <div className="h-48"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
