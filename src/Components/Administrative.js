import React from 'react'
import tejsr from './assets/tejsr.jpg'
import ganjsrrr from './assets/ganjsrrr.jpg'
import dhamendra from './assets/dhamendra.jpg'
import dharsir from './assets/dharsr.jpg'
import khimsr from './assets/khimsr.jpg'
import gb from './assets/gb.jpg'
import lalsari from './assets/lalsari.jpg'
import susma from './assets/susma.jpg'
import tham from './assets/tham.jpg'
const Administrative = () => {
  return (
    <div>
      <h1 className='text-center text-2xl bg-gray-100 font-bold p-4 mt-4'>Administrative</h1>
      <div className='grid grid-cols-4 ml-28'>
      <div className='rounded-xl bg-blue-gray-50 w-[260px] h-[320px] mt-5  flex flex-col items-center justify-start'>
  <img src={tejsr} alt='' className='w-52 h-52 mt-5 rounded-full' />
  <h1 className="font-semibold  text-xl">Tej Pratap Dubey </h1>
  <p className='text-xs font-bold'>Principal</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>
<div className='rounded-xl bg-blue-gray-50 w-[260px] h-[320px] mt-5  flex flex-col items-center justify-start'>
  <img src={ganjsrrr} alt='' className='w-52 h-52 mt-5 rounded-full' />
  <h1 className="font-semibold text-center text-xl">Ganj Bahadur Kawar</h1>
  <p className='text-xs font-bold'>Accountant</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>
<div className='rounded-xl bg-blue-gray-50 w-[260px] h-[320px] mt-5  flex flex-col items-center justify-start'>
  <img src={dharsir} alt='' className='w-52 h-52 mt-4 rounded-full' />
  <h1 className="font-semibold text-center text-xl "> Dharmajit Oli </h1>
  <p className='text-xs font-bold'>Assistant Administration</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>
<div className='rounded-xl bg-blue-gray-50 w-[260px] h-[320px] mt-5  flex flex-col items-center justify-start'>
  <img src={dhamendra} alt='' className='w-[203px] h-[203px] mt-5 rounded-full' />
  <h1 className="font-semibold text-xl ">Dharmendra Kawar </h1>
  <p className='text-xs font-bold'>Assistant Administration</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>

<div className='rounded-xl bg-blue-gray-50 w-[260px] h-[340px] mt-5 flex flex-col items-center justify-start'>
  <img src={khimsr} alt='' className='w-56 h-56 mt-5 rounded-full' />
  <h1 className="font-semibold text-xl ">Khim Bahadur Kawar </h1>
  <p className='text-xs font-bold'>Assistant Administration</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>
</div>
{/* Office Assistant  */}
<h1 className='text-center text-2xl bg-gray-100 font-bold p-2 mt-5'>Office Assistant</h1>
<div className=' flex gap-24 ml-28'>
  <div className='rounded-xl bg-blue-gray-50 w-[260px] h-[340px] mt-5  flex flex-col items-center justify-start'>
  <img src={gb} alt='' className='w-56 h-56 mt-5 rounded-full' />
  <h1 className="font-semibold text-xl ">Gaurab Mahara  </h1>
  <p className='text-xs font-bold'>Office Assistant</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>
<div className='rounded-xl bg-blue-gray-50 w-[260px] h-[340px] mt-5  flex flex-col items-center justify-start'>
  <img src={lalsari} alt='' className='w-56 h-56 mt-4 rounded-full' />
  <h1 className="font-semibold text-xl "> Lalsari BK</h1> 
  <p className='text-xs font-bold'>Office Assistant</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>
<div className='rounded-xl bg-blue-gray-50 w-[260px] h-[340px] mt-5  flex flex-col items-center justify-start'>
  <img src={susma} alt='' className='w-56 h-56 mt-4 rounded-full' />
  <h1 className="font-semibold text-xl ">Susma Sen</h1>
  <p className='text-xs font-bold'>Office Assistant</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>
</div>
{/* guard  */}
<h1 className='text-center text-2xl bg-gray-100 font-bold p-2 mt-5'>Security Guard</h1>
<div className='flex gap-24 ml-28'>
  <div className='rounded-xl bg-blue-gray-50 w-[260px] h-[340px] mt-5  flex flex-col items-center justify-start'>
  <img src={gb} alt='' className='w-56 h-56 mt-5 rounded-full' />
  <h1 className="font-semibold text-xl ">Khim Kawar </h1>
  <p className='text-xs font-bold'>Security Guard</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>
<div className='rounded-xl bg-blue-gray-50 w-[260px] h-[340px] mt-5  flex flex-col items-center justify-start'>
  <img src={tham} alt='' className='w-56 h-56 mt-5 rounded-full' />
  <h1 className="font-semibold text-xl ">Tham Bahadur Sunar</h1> 
  <p className='text-xs font-bold'>Security Guard</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>
<div className='rounded-xl bg-blue-gray-50 w-[260px] h-[340px] mt-5  flex flex-col items-center justify-start'>
  <img src={gb} alt='' className='w-56 h-56 mt-5 rounded-full' />
  <h1 className="font-semibold text-xl ">Tukman Mahara</h1>
  <p className='text-xs font-bold'>Security Guard</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>
</div>



<h1 className='text-center text-2xl bg-gray-100 font-bold p-2 mt-5'>Driver</h1>
<div className='rounded-xl bg-blue-gray-50 w-[260px] h-[340px] mt-5 ml-24 flex flex-col items-center justify-start'>
  <img src={gb} alt='' className='w-56 h-56 mt-5 rounded-full' />
  <h1 className="font-semibold text-xl ">Bhuwan Bista  </h1>
  <p className='text-xs font-bold'>Driver</p>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    more detail
    </button>
</div>


    </div>
  )
}

export default Administrative
