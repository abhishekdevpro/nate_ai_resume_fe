import React from 'react'



const Team = ({provideecards}) => {
  return (
    <>
      <div className=' flex flex-col md:flex-row px-2 md:px-12' >
      {provideecards.map((card, index) => (
          
<div key={index} className="p-1">
  <div className="bg-white border-2 border-white  w-[250px] rounded-lg shadow-xl shadow-gray-200 flex flex-col gap-8   card-container hover:bg-slate-800 hover:text-white border-t-4 border-t-slate-800">
    <div className="  " >
      <img src={card.img}/>
    </div>
    <p className=" text-center py-5 font-bold text-xl">{card.title}</p>
    
  </div>
</div>

        ))}
      </div>
    </>
  )
};

export default Team

