import React from 'react'
import sajeev from './assets/sajeev.jpg'
import keeran from './assets/keeran.jpg'
import aaaa from './assets/aaaa.jpg'
import rameshvt from './assets/rameshvt.jpg'
import hema from './assets/hemaa.jpg'


const Instructor = () => {
  return (
    <div>
     <h1 className='mt-5 p-3 text-center text-xl font-semibold bg-gray-50'>Animal Science Instructor</h1> 
      <div className='flex gap-16 ml-24'>
      <div className='rounded-xl bg-blue-gray-50 w-[220px] h-[280px] mt-5  flex flex-col items-center justify-start'>
  <img src={sajeev} alt='' className='w-44 h-44 mt-4 rounded-full' />
  <h1 className="font-semibold  text-xl">Sanjeev Acharya </h1>
  <p className='text-xs font-bold'>Co-ordinator</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>
<div className='rounded-xl bg-blue-gray-50 w-[220px] h-[280px] mt-5  flex flex-col items-center justify-start'>
  <img src={keeran} alt='' className='w-44 h-44 mt-4 rounded-full' />
  <h1 className="font-semibold text-center text-xl">Dr.keeranjit Dangi</h1>
  <p className='text-xs font-bold'>Instructor</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>
<div className='rounded-xl bg-blue-gray-50 w-[220px] h-[280px] mt-5  flex flex-col items-center justify-start'>
  <img src={aaaa} alt='' className='w-44 h-44 mt-4 rounded-full' />
  <h1 className="font-semibold text-center text-xl "> Dr,Amrita Khadka </h1>
  <p className='text-xs font-bold'>Instructor</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>
<div className='rounded-xl bg-blue-gray-50 w-[220px] h-[280px] mt-5  flex flex-col items-center justify-start'>
  <img src={rameshvt} alt='' className='w-44 h-44 mt-4 rounded-full' />
  <h1 className="font-semibold text-xl ">Ramesh Kc</h1>
  <p className='text-xs font-bold'>Assistant Instructor</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>

<div className='rounded-xl bg-blue-gray-50 w-[220px] h-[280px] mt-5  flex flex-col items-center justify-start'>
  <img src={hema} alt='' className='w-44 h-44 mt-4 rounded-full' />
  <h1 className="font-semibold text-xl ">Hema Bhat </h1>
  <p className='text-xs font-bold'>Assistant Instructor</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>
</div>
    </div>
  )
}

export default Instructor
