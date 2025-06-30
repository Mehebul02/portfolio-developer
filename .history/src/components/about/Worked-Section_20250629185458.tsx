export default function WorkedOn() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div className="max-w-6xl w-full">
        {/* Main heading with Japanese characters */}
        <div className="mb-16 text-center">
          <span className="block text-2xl mb-2">二人</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            PREVIOUSLY
            <br />
            WORKED ON
          </h1>
        </div>

        {/* Organic button arrangement */}
        <div className="relative h-96 md:h-[500px] w-full">
          {/* AUTODESK button (larger, emphasized) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <button className="bg-white border-2 border-black px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:scale-105 transition-transform">
              <span className="flex items-center gap-2">
                <span className="text-orange-500 text-2xl">▲</span>
                AUTODESK
              </span>
            </button>
          </div>

          {/* Smaller buttons arranged organically around */}
          <div className="absolute top-10 left-10 transform rotate-6">
            <button className="bg-white border border-gray-300 px-6 py-3 rounded-full hover:shadow-md transition-all">
              awwwards.
            </button>
          </div>

          <div className="absolute top-20 right-20 transform -rotate-6">
            <button className="bg-white border border-gray-300 px-6 py-3 rounded-full hover:shadow-md transition-all">
              CSS WINNER
            </button>
          </div>

          <div className="absolute bottom-20 left-1/4 transform rotate-12">
            <button className="bg-white border border-gray-300 px-6 py-3 rounded-full hover:shadow-md transition-all">
              facebook
            </button>
          </div>

          <div className="absolute bottom-32 right-32 transform -rotate-12">
            <button className="bg-white border border-gray-300 px-6 py-3 rounded-full hover:shadow-md transition-all">
              /thoughtworks
            </button>
          </div>

          {/* Floating small button */}
          <div className="absolute top-1/3 right-10 transform rotate-45">
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm hover:shadow-md transition-all">
              CSSDesignAwards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}