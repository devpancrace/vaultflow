import React from 'react';



const CTASection: React.FC = () => {
    return (
        <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <div className="glass-effect rounded-2xl p-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Our powerful analytics<br/>
                    <span className="gradient-text">provides invaluable insights.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Harness the power of data visualization and drive your business forward with actionable 
                    insights with our user-friendly Analytics Dashboard, and take advantage of our 
                    innovative digital credit tokens to reward your customers and incentivize 
                    engagement.
                </p>
                <button className="px-8 py-4 bg-white text-dark-bg rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                    Download the app
                </button>
            </div>
        </div>
    </section>
    );
};

export default CTASection;