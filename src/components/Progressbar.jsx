import React from 'react'
import Position from './Position'

const time = [
    {
        id: "01",
        description:"Preliminary",
        completed:true
    },
    {
        id: "02",
        description:"YourDetails",
        completed:true
    },
    {
        id: "03",
        description:"KYC",
        completed:true
    },
    {
        id: "04",
        description:"Parties",
        completed:false
    },
   
    {
        id: "05",
        description:"Claim",
        completed:false
    },
    {
        id: "06",
        description:"Review",
        completed:false
    },
    {
        id: "07",
        description:"Payment",
        completed:false
    },

]
const Progressbar = () => {
  return (
    <div className='md:row-span-2 bg-slate-100 grid md:grid-cols-7'>
       
        {
            time.map((val,index)=>(<Position id={val.id} description={val.description} completed={val.completed}/>))
        }
        
    </div>
  )
}

export default Progressbar