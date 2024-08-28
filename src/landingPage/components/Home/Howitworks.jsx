// src/components/HowItWorks.jsx
import React from 'react';

const HowItWorks = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">How It Works</h2>
        <p className="mt-4 text-lg text-gray-500 text-center">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
        </p>
        <div className="mt-10 flex flex-col  gap-3 ">
          
          <div className="mt-6 flex flex-col px-4  border-b-4 border-b-blue-200 rounded-xl py-5 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">1. Project Discovery Call</h3>
            <p className="mt-2 text-sm text-gray-500">
              Party we years to order allow asked of. We so opinion friends me message as delight.
            </p>
          </div>
          
          <div className="mt-6 flex flex-col px-4  border-b-4 border-b-blue-200 rounded-xl py-5 hover:shadow-lg">
            <h3 className="text-xl text-left font-semibold text-gray-900">2. Project Discovery Call</h3>
            <p className="mt-2 text-sm text-gray-500">
              His defective nor convinced residence own. Connection has put impossible own apartments boisterous.
            </p>
          </div>
          
          <div className="mt-6 flex flex-col px-4  border-b-4 border-b-blue-200 rounded-xl py-5 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">3. Project Discovery Call</h3>
            <p className="mt-2 text-sm text-gray-500">
              From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
