import React from 'react';
import Image from 'next/image'

const HeroSection: React.FC = () => {
    return (
        <section className=" h-[90vh] mb-50 pt-[170px] pr-[20px] pb-[0px] pl-[20px] ">
            {/* HeroSection content goes here */}
            
            {/* Overlay sombre */}
       
            <div className=" absolute inset-0 bg-cover h-full mt-10 bg-[url(../../public/hero-stack-min.jpg)]"></div>

            {/* Contenu */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                    <span className="text-sm text-gray-200">
                        We just raised $20M in Series B. Learn more
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                    Modern analytics
                    <br />
                    <span className="text-pink-400">for the modern world</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Suspendisse varius enim in eros elementum tristique.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <button className="px-8 py-4 bg-white text-dark-bg rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                        Download the app
                    </button>
                    <button className="px-8 py-4 rounded-lg border border-gray-400 text-gray-200 hover:text-white hover:border-gray-200 transition-all">
                        Talk to an expert
                    </button>
                </div>

                {/* Dashboard Preview (Image) */}
                <div className="relative max-w-4xl mx-auto h-96">
                    <Image
                        src="/dashboard-image.png"
                        fill
                        alt="Dashboard Preview"
                        className="rounded-2xl shadow-2xl border border-white/20"
                    />
                </div>
            </div>

        </section>
    );
};

export default HeroSection;