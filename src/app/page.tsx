// app/page.tsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TrustedSection from '../components/TrustedBySection';
import FeaturesSection from '../components/FeaturesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';


export default function HomePage() {
  return (
    <div className="min-h-full flex flex-col ">
      {/* Header Navigation */}
      <Header />
    

      {/* Hero Section */}
      <HeroSection />
       
      {/* Trusted By Section */}
      <TrustedSection />
      
     
      {/* Features Section */}
      <FeaturesSection />
      

      {/* Final CTA Section */}
      <CTASection />
      
    
      {/* Footer */}
      <Footer />
    </div>
  );
}