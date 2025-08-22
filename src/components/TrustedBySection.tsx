import React from 'react';
import Image from 'next/image';

const TrustedSection: React.FC = () => {
  const logos = [
    { src: '/trustedBy/dell.png', alt: 'Dell', w: 60, h: 20 },
    { src: '/trustedBy/zendesk.png', alt: 'Zendesk', w: 87, h: 17 },
    { src: '/trustedBy/rakuten.png', alt: 'Rakuten', w: 67, h: 21 },
    { src: '/trustedBy/pacific.png', alt: 'Pacific', w: 143, h: 13 },
    { src: '/trustedBy/ncr.png', alt: 'NCR', w: 80, h: 24 },
    { src: '/trustedBy/lattice.png', alt: 'Lattice', w: 120, h: 22 },
    { src: '/trustedBy/ted.png', alt: 'TED', w: 54, h: 20 },
  ];

  return (
    <section className="py-16 bg-dark-bg">
      <div className="absolute max-w-6xl mx-auto flex flex-col items-center text-center px-6">
        {/* Texte */}
        <p className="text-gray-400 mb-10 text-lg">
          Trusted by teams at over{' '}
          <span className="font-semibold text-white">1,000</span> of the world’s leading organizations.
        </p>

        {/* Logos en flex */}
        <div className="flex flex-wrap justify-center items-center gap-10">
          {logos.map((logo, i) => (
            <div key={i} className="flex justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                className="object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
