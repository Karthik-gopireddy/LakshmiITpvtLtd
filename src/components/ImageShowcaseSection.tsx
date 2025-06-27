
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Experience Innovation Today
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Our cutting-edge IT solutions are designed to transform how businesses 
            operate in the digital age, delivering efficiency and competitive advantage.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Advanced IT infrastructure with circuit board technology" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Next Generation IT Infrastructure</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Built with enterprise-grade technology and sophisticated architecture, our IT solutions 
              seamlessly integrate into various business environments, from startups to enterprises, 
              providing reliable support and driving digital transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
