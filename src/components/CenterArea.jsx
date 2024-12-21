import React from 'react'
import Progressbar from './Progressbar'
import Claimbox from './Claimbox'
import Heading from './Heading'

const CenterArea = () => {
  return (
    <div className='md:col-span-10 grid md:grid-rows-11 md:px-10 md:py-4 rounded-2xl bg-slate-100'>
        <Progressbar/>
        <Heading/>
        <Claimbox/>
    </div>
  )
}

export default CenterArea