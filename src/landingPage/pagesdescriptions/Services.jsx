import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Services() {
    return ( <>
    <Navbar/>
    <div className="m-10 mx-40 p-5  shadow-2xl">
  <h1 className="text-5xl mb-4 my-4 underline ">ResumeSquad Services:  </h1>
  <br/>
    <ul class="list-disc pl-6 space-y-2 text-gray-800">
  <li class="mb-4 "><strong>Resume Writing:</strong>Expertly crafted, industry-specific resumes tailored to highlight your skills and experiences.
  </li>
  <li class="mb-4 "><strong>Cover Letter Writing:</strong>Customized cover letters that complement your resume and align with the job you're applying for.</li>
  <li class="mb-4 "><strong>LinkedIn Profile Optimization:</strong> Professional enhancement of your LinkedIn profile to attract recruiters and build your personal brand.
  </li>
  <li class="mb-4"><strong>Keyword Optimization:</strong>Strategic addition of relevant keywords to increase visibility and compatibility with ATS systems.
  </li>
  <li class="mb-4"><strong>ATS Compliance:</strong> Resumes optimized to pass Applicant Tracking Systems (ATS), ensuring higher chances of getting shortlisted.
  </li>
  <li class="mb-4"><strong>Resume AI Scoring:</strong>AI-powered tool that evaluates your resume’s strength, ensuring alignment with job descriptions and industry standards.
  </li>
  <li class="mb-4"><strong>Job Matching:</strong>Direct integration of your resume with relevant job openings, making it easier to apply and track opportunities.
  </li>
</ul>


    </div> 
    <Footer/>
    </> );
}

export default Services;