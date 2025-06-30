export default function Worked() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-start justify-between py-16 md:py-24 lg:py-32 gap-12 lg:gap-24">
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
            <div className="relative w-full h-full flex flex-col gap-8">
              {/* First row */}
              <div className="flex justify-between gap-4">
                {/* awwwards - top left */}
                <div className="transform -rotate-12 scale-75 md:scale-90 lg:scale-100">
                  <div className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium">
                    awwwards.
                  </div>
                </div>

                {/* facebook - top right */}
                <div className="transform rotate-12 scale-75 md:scale-90 lg:scale-100">
                  <div className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium border border-gray-200 shadow-sm">
                    facebook
                  </div>
                </div>
              </div>

              {/* Second row */}
              <div className="flex justify-center gap-8">
                {/* CSS Winner */}
                <div className="transform rotate-6 scale-75 md:scale-90 lg:scale-100">
                  <div className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium border border-gray-200 shadow-sm">
                    CSS WINNER
                  </div>
                </div>

                {/* thoughtworks */}
                <div className="transform -rotate-3 scale-75 md:scale-90 lg:scale-100">
                  <div className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium border border-gray-200 shadow-sm">
                    /thoughtworks
                  </div>
                </div>
              </div>

              {/* Third row */}
              <div className="flex justify-between gap-4 cursor-pointer">
                {/* AUTODESK */}
                <div className="transform -rotate-6 scale-75 md:scale-90 lg:scale-100">
                  <div className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium border border-gray-200 shadow-sm">
                    <span className="flex items-center gap-2">
                      <span className="text-orange-500">▲</span>
                      AUTODESK
                    </span>
                  </div>
                </div>

                {/* CSSDesignAwards */}
                <div className="transform rotate-45 scale-75 md:scale-90 lg:scale-100 cursor-pointer">
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
    </div>
  );
}