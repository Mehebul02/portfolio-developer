export default function Worked() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-start justify-between py-16 md:py-24 lg:py-32">
          {/* Main heading */}
          <div className="mb-12 lg:mb-0 lg:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              PREVIOUSLY
              <br />
              WORKED ON
            </h2>
          </div>

          {/* Logo containers arranged organically */}
          <div className="relative w-full lg:w-1/2 h-96 lg:h-auto">
            {/* Container to maintain aspect ratio */}
            <div className="relative w-full h-full !gap-16 ">
              {/* awwwards - top left */}
              <div className="absolute top-0 left-0 lg:left-16 xl:left-24 transform -rotate-12 scale-75 md:scale-90 lg:scale-100">
                <div className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium">
                  awwwards.
                </div>
              </div>

              {/* CSS Winner - bottom left */}
              <div className="absolute top-16 left-8 lg:left-24 xl:left-32 transform rotate-6 scale-75 md:scale-90 lg:scale-100">
                <div className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium border border-gray-200 shadow-sm">
                  CSS WINNER
                </div>
              </div>

              {/* thoughtworks - center */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 -rotate-3 scale-75 md:scale-90 lg:scale-100">
                <div className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium border border-gray-200 shadow-sm">
                  /thoughtworks
                </div>
              </div>

              {/* facebook - top right */}
              <div className="absolute top-4 right-0 lg:right-16 xl:right-24 transform rotate-12 scale-75 md:scale-90 lg:scale-100">
                <div className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium border border-gray-200 shadow-sm">
                  facebook
                </div>
              </div>

              {/* AUTODESK - bottom center */}
              <div className="absolute top-32 right-16 lg:right-32 xl:right-40 transform -rotate-6 scale-75 md:scale-90 lg:scale-100">
                <div className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium border border-gray-200 shadow-sm">
                  <span className="flex items-center gap-2">
                    <span className="text-orange-500">▲</span>
                    AUTODESK
                  </span>
                </div>
              </div>

              {/* CSSDesignAwards - top right corner */}
              <div className="absolute top-0 right-0 transform rotate-45 scale-75 md:scale-90 lg:scale-100">
                <div className="bg-white text-gray-900 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-gray-200 shadow-sm">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    CSSDesignAwards
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}