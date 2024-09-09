// src/components/HowItWorks.jsx
import React from 'react';

const HowItWorks = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">How It Works</h2>
        <p className="mt-4 text-lg text-gray-500 text-center">Create your account in less than 1 minute & provide your career details / Resume, and our expert writers, along with AI technology, will create a customized, job-ready resume tailored to your goals.
        </p>
        <div className="mt-10 flex flex-col  gap-3 ">
          
          <div className="mt-6 flex flex-col px-4  border-b-4 border-b-blue-200 rounded-xl py-5 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">1. Create account and submit Details</h3>
            <p className="mt-2 text-sm text-gray-500">
            Create an account in under 1 minute and submit requested details, add an already existing resume, yes we give you a “Note” section to add your expectations there.
            </p>
          </div>
          
          <div className="mt-6 flex flex-col px-4  border-b-4 border-b-blue-200 rounded-xl py-5 hover:shadow-lg">
            <h3 className="text-xl text-left font-semibold text-gray-900">2. Your Resume allotted to Resume making expert            </h3>
            <p className="mt-2 text-sm text-gray-500">
            Get instantly connected to a resume-making expert who will begin crafting your personalized resume.
            </p>
          </div>
          
          <div className="mt-6 flex flex-col px-4  border-b-4 border-b-blue-200 rounded-xl py-5 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">3.  ATS & AI optimization            </h3>
            <p className="mt-2 text-sm text-gray-500">Your resume is optimized using ATS and AI technology to ensure it meets industry standards and job-specific requirements.
            </p>
          </div>
          <div className="mt-6 flex flex-col px-4  border-b-4 border-b-blue-200 rounded-xl py-5 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">4.  Formatting and adding templates</h3>
            <p className="mt-2 text-sm text-gray-500">Choose from professionally designed templates, and your resume will be formatted to perfection for a polished, standout presentation.   </p>
          </div>
          <div className="mt-6 flex flex-col px-4  border-b-4 border-b-blue-200 rounded-xl py-5 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">5.  Your approval
            </h3>
            <p className="mt-2 text-sm text-gray-500">Your finalized resume is automatically sent to you for review and approval before it’s ready to use.  </p>
          </div>
          <div className="mt-6 flex flex-col px-4  border-b-4 border-b-blue-200 rounded-xl py-5 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">6.  Pay & Download instantly            </h3>
            <p className="mt-2 text-sm text-gray-500">Complete the payment, and instantly download your optimized, professional resume.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
