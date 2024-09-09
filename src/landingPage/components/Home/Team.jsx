import React from 'react'



const Team = ({provideecards}) => {
  return (
    <>
      <div className=' flex flex-col md:flex-row px-2 md:px-8' >
      {provideecards.map((card, index) => (
          
<div key={index} className="p-5">
  <div className="bg-white border-t-4 border-t-blue-300   rounded-lg shadow-xl shadow-gray-200 flex flex-col gap-4  card-container hover:bg-slate-300">
    <div className="  text-xl " >
      <img src={card.img} className='w-80 h-40'/>
    </div>
    <p className="text-black text-left font-bold px-4 py-2 text-2xl">{card.title}</p>
    <p className="text-gray-700 text-left px-4 py-2 text-lg break-all">{card.desc}</p>
  </div>
</div>

        ))}
      </div>
    </>
  )
};

export default Team

