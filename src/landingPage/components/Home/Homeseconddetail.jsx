import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const SecondCardSlider = ({ secondcards }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-8 md:px-16  overflow-x-hidden  " >
      <Slider {...settings}>
        {secondcards.map((card, index) => (
          <div key={index} className=" py-4">
            <div className="bg-white rounded-lg flex flex-col shadow-lg mx-3 p-6">
                
              
              <div className=' text-slate-700'>{card.content}</div>
              <div className=' flex justify-center'>
                <img src={card.img} alt={card.name} className=" h-14 w-14 text-center mt-8 object-cover mb-2 rounded-lg" />
              
                </div>
              <div className="text-black text-center font-bold text-xl">{card.name}</div>
              <div className="text-gray-700 text-center text-lg">{card.description}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SecondCardSlider;
