import React from 'react'
import Caro from '../Components/Caro'
import princi from './photos/princi.jpg'

const Home = () => {
  return (
    <div>
     <Caro/>
     <div>
      <div>
        <img src={princi} alt='' className='w-60 h-60'/>
      </div>
      <div>

      </div>
     </div>
    </div>
  )
}

export default Home
