"use client";
import Image from "next/image";

export default function Header() {


  return (
    <header className="w-full fixed top-0 z-50 bg-[rgba(11,1,33,1)] ">
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-custom rounded-lg flex items-center justify-center">
                   <Image
                    src={'/logo.png'}
                    width={50}
                    height={50}
                    alt="logo"
                   />
                </div>
                <span className="font-montserrat font-[700] text-[22px] leading-[100%] text-[rgba(236,236,236,1)]">Vaultflow</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">About us</a>
            </div>
            
            <div className="flex items-center space-x-4">
                <button className="hidden md:block px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
                    Download the app
                </button>
                <button className="px-4 py-2 bg-white text-dark-bg rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Talk to an expert
                </button>
            </div>
        </div>
    </nav>
    </header>
  );
}
