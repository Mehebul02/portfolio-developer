import React from "react";

const ExperienceSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          I've been Developing Websites since 2013
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
          We start every new client interaction with an in-depth discovery call where we get to
          know each other and recommend the best course of action.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-6">PREVIOUSLY WORKED ON</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border-b border-gray-200 pb-2">awwwards,</div>
          <div className="border-b border-gray-200 pb-2">CSSWINNER</div>
          <div className="border-b border-gray-200 pb-2">facebook</div>
          <div className="border-b border-gray-200 pb-2">Athoughtworks</div>
          <div className="border-b border-gray-200 pb-2">CssDesign Awards</div>
          <div className="border-b border-gray-200 pb-2">AUTODESK</div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;