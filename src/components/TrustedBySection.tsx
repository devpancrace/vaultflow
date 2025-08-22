import React from 'react';

import Image from 'next/image';


const TrustedSection: React.FC = () => {
    
  return (
    <section className="pt-[60px] pr-[20px]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 mb-12">
          Trusted by teams at over{' '}
          <span className="font-semibold text-white">1,000</span> of the worlds leading organizations.
        </p>

        <div className="flex justify-center items-center space-x-12 opacity-60 grayscale">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA4MCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjMwIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSI0MCIgeT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzMzMiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiPkRFTEw8L3RleHQ+Cjwvc3ZnPg=="
            alt="Dell"
            className="h-8"
          />
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTAwIDMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSI1MCIgeT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzMzMiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiPnplbmRlc2s8L3RleHQ+Cjwvc3ZnPg=="
            alt="Zendesk"
            className="h-8"
          />
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTAwIDMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSI1MCIgeT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzMzMiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiPk5DUjwvdGV4dD4KPHN2Zz4="
            alt="NCR"
            className="h-8"
          />
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTAwIDMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSI1MCIgeT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzMzMiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiPkxhdHRpY2U8L3RleHQ+Cjwvc3ZnPg=="
            alt="Lattice"
            className="h-8"
          />
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA4MCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjMwIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSI0MCIgeT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzMzMiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiPlRFRDwvdGV4dD4KPHN2Zz4="
            alt="TED"
            className="h-8"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
