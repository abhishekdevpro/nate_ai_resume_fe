import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" bg-black text-white py-8" id="footerbg">
        <div className="container mx-auto flex flex-col gap-7 justify-between px-6">
          <br />
          <div className=" flex flex-col md:flex-row px-3 justify-around">
            <div className="w-full md:w-auto mb-6 md:mb-0" id="footer">
              <h2 className="text-lg font-bold text-white">
                Lets Get in Touch
              </h2>
              <p>
                Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <h2 className="text-lg font-bold text-white">Company</h2>
              <ul>
                <li>
                  <a href="#" className="">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Prices
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Process
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <h2 className="text-lg font-bold text-white">About</h2>
              <ul>
                <li>
                  <a href="#" className="">
                    Montreal
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Toronto
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Ottawa
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Calgary
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Edmonton
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Vancover
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <h2 className="text-lg font-bold text-white">Our Service</h2>
              <ul>
                <li>
                  <a href="#" className="">
                    Professional Writing
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Responsive Support
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Quick Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Top Quality
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Revisions Included
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container text-base md:mx-auto text-center border-t border-white pt-6 mt-6">
          <p className="text-white text-right">
            &copy; Copyright By ResumeSquard.ca All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
