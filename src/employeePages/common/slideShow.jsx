import React, { useState, useEffect } from "react";
import Img1 from "../../assets/slides/1.jpeg";
import Img2 from "../../assets/slides/2.jpeg";

const Slideshow = () => {
  const images = [Img1, Img2, Img1];

  // State to keep track of the current image index
  const [current, setCurrent] = useState(0);

  // Total number of images
  const length = images.length;

  // Go to the next image
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Go to the previous image
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 1000); // 2000ms = 2 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [current, length]);

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={prevSlide}
        className="absolute left-[-10%] z-10 mr-15  text-white p-1 rounded-full text-[40px]"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-[-10%] z-10 ml-30  text-white p-1 rounded-full text-[40px]"
      >
        &#10095;
      </button>
      {images.map((image, index) => (
        <div
          key={index}
          className={index === current ? "opacity-100" : "opacity-0"}
        >
          {index === current && (
            <div className="sm:w-[500px] sm:h-[400px]">
              <img
                src={image}
                alt="Slide"
                className="w-full h-full object-fill rounded-md"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
