import React from 'react'



const Team = ({provideecards}) => {
  return (
    <>
      <div className=' flex flex-col md:flex-row px-2 md:px-12' >
      {provideecards.map((card, index) => (
          
<a key={index} href={card.link}  target='_blank' rel="noopener noreferrer" className="p-1">
  <div className="bg-white border-2 border-white  rounded-lg shadow-xl shadow-gray-200 flex flex-col gap-8   card-container hover:bg-slate-800 hover:text-white border-t-4 border-t-slate-800">
    <div className="  " >
      <img src={card.img}/>
    </div>
    <p className=" text-center  font-bold text-lg w-80 h-16">{card.title}</p>
    
  </div>
</a>

        ))}
      </div>
    </>
  )
};

export default Team

