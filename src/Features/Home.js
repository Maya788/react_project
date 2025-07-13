import React from 'react'
import Caro from '../Components/Caro'
import princi from './photos/princi.jpg'

const Home = () => {
  return (
    <div>
     <Caro/>
     <div className='flex gap-48 mt-10 bg-blue-gray-50'>
      <div>
        <img src={princi} alt='' className='w-60 h-60 mt-10 rounded-xl ml-10'/>
      </div>
      <div>
<h1 className='underline font-bold'>Message From Our Principal</h1>
      </div>
     </div>
     <div>

     </div>
    </div>
  )
}

export default Home
