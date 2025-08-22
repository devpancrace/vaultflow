import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="glass-effect rounded-2xl p-6 sm:p-10 lg:p-16">
          {/* Titre */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Our powerful analytics <br className="hidden sm:block" />
            <span className="">provides invaluable insights.</span>
          </h2>

          {/* Paragraphe */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Harness the power of data visualization and drive your business forward with actionable 
            insights with our user-friendly Analytics Dashboard, and take advantage of our 
            innovative digital credit tokens to reward your customers and incentivize 
            engagement.
          </p>

          {/* Bouton */}
          <button className="h-12 w-full sm:w-auto px-8 text-white font-semibold border border-white/30 rounded-full hover:bg-white hover:text-dark-bg transition duration-300">
            Download the app
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
