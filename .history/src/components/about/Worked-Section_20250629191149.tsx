export default function Worked() {
  return (
    <div className="">
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
           <div className="flex flex-wrap justify-center items-center gap-4 mt-10 relative">
      {logos.map((logo, index) => (
        <div
          key={index}
          className={`w-52 h-16 rounded-full flex items-center justify-center text-center font-medium text-lg px-4 ${logo.className}`}
        >
          {logo.name}
        </div>
      ))}
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}