import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Resources() {
    return ( <>
    <Navbar/>
    <div className="m-10 mx-40 p-5  shadow-2xl">
  <h1 className="text-5xl font-semibold my-4 underline ">Resources</h1> 
  
   ResumeSquad offers a comprehensive range of resources to its customers, enhancing their job search experience. Their core services include professional resume writing, where expert writers craft tailored resumes optimized for specific industries and roles. 

<h1 className="text-2xl font-semibold my-2 mt-5 "></h1>
  Additionally, ResumeSquad provides an AI-powered resume scoring feature, offering insights into how well a resume matches job descriptions and ATS requirements. Customers can also benefit from their job-adding feature, allowing users to directly link their resumes to potential job opportunities. 
Other resources include:

<h1 className="text-2xl font-semibold my-2 mt-5"></h1>  
<ul class="list-disc pl-6 space-y-2 text-gray-800">
  <li class="font-semibold">Cover letter creation</li>
  <li class="font-semibold">LinkedIn profile optimization</li>
  <li class="font-semibold">Interview preparation guides</li>
</ul>


    </div> 
    <Footer/>
    </> );
}

export default Resources;