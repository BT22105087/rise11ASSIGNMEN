import React from 'react'

const Position = ({id,description,completed}) => {
  return (
    <div className='flex flex-col md:gap-y-2 bg-slate-100'>
        <div className='flex md:flex-row items-center lg:gap-1'>
            <p className='lg:text-3xl md:text-sm lg:font-bold font-semibold '>{id}</p>
            <p className='text-sm text-slate-400 font-semibold'>{description}</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
            <div className={`${completed ? "bg-blue-500" : "border border-blue-500"} md:h-8 md:w-8 w-4 h-4 rounded-full flex items-center justify-center`}>

  {completed === true && <span className="text-white text-sm md:text-lg lg:text-xl font-extrabold">&#10003;</span>}
</div>
            
            <div className={`${completed ? "bg-blue-500" : "bg-blue-300"} w-9/12 md:h-1`}></div>

            </div>
           


        

    </div>
  )
}

export default Position