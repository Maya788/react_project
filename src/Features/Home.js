import React from 'react'
import Caro from '../Components/Caro'
import princi from './photos/princi.jpg'
import Animal from './photos/Animal.jpg'
import AGG from './photos/AGG.jpg'
import tttt from './photos/tttt.jpg'
import hostel from './photos/hostel.jpg'
import lab from './photos/lab.jpg'
import library from './photos/library.jpg'
import sport from './photos/sportd.jpg'
import tour from './photos/tour.jpg'
import { NavLink } from 'react-router'


const Home = () => {
  return (
    <div>
     <Caro/>
     {/* principal Message  */}
     <div className='flex gap-32 mt-10  bg-[#f7f7f7]  pb-5'>
      <div>
        <img src={princi} alt='' className='w-56 h-72 mt-4 rounded-xl ml-20'/>
        <h2 className='text-center ml-20 bg-[#810082] text-white rounded-xl h-14 w-56 mt-2'>Tej Pratap Dubey<br/>Principal</h2>
      </div>
      <div className='rounded-xl bg-white ml-14 w-[900px] h-[380px] text-justify mt-4 p-3  '>
<h1 className=' border-b-2  border-gray-300 text-center pt-2 text-2xl font-bold'>Message From Our Principal</h1><br/>
 <h1> Dear Students, Parents, and Esteemed Stakeholders.<br/><br/>
It is with great pleasure that I welcome you to Rolpa Poly technic Institute, a prestigious constituent institute of the Council for Technical and Vocational Training. Established in 2074 BS, our institution is committed to providing high-quality technical education and vocational training to the youth of our region and beyond. Located in the hilly areas, where the majority of the population comes from low-income backgrounds, we understand the importance of accessible, skill-based education that can pave the way for a better future.</h1>
<button className='ml-[650px] rounded-full bg-orange-400 mt-12 py-1 px-2'>
 <NavLink>Read more</NavLink> 
  </button>
      </div>
     </div>
     {/* our programs  */}
     <div className='pb-26'>
       <div>
   <h1 className='border-b-2 text-center  font-bold p-3 text-2xl'>Our Programs</h1>
     </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-48 mt-6  pb-6 ml-80 place-items-center">
<div className='rounded-xl bg-blue-gray-50 w-[220px] h-[250px] pb-4 flex flex-col items-center justify-start'>
  <img src={Animal} alt='' className='w-44 h-48 mt-6 rounded' />
  <h1 className="mt-4  text-center font-semibold ">Animal Science</h1>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
    <NavLink to= "/programs/Animal">Read more</NavLink> 
    </button>
</div>


  <div className='rounded-xl bg-blue-gray-50   pb-4 w-[220px] h-[250px] flex flex-col items-center justify-start'>
  <img src={AGG} alt='' className='w-44 h-48 mt-6 rounded ' />
  <h1 className="mt-4 text-center font-semibold">Plant Science</h1>
 <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
  <NavLink to= "/programs/Plant">Read more</NavLink> 
  </button>
</div>

 <div className='rounded-xl bg-blue-gray-50 pb-4 w-[220px] h-[250px] flex flex-col items-center justify-start'>
  <img src={tttt} alt='' className='w-44 h-48 mt-6 rounded' />
  <h1 className="mt-4 text-center font-semibold">Information Technology</h1>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
   <NavLink to= "/programs/Dit">Read more</NavLink> 
    </button>
</div>
</div>
{/* facilities  */}
     <div className='pb-26 bg-gray-50'>
       <div>
   <h1 className='border-b-2 text-center  font-bold p-3 text-2xl'>Areas of Facilities</h1>
     </div>
    <div className=" flex flex-row  gap-20 mt-6 mx-14 pb-6 ">
 <div className='rounded-xl bg-[#ecdee0] pb-4 w-[250px] h-[280px] flex flex-col items-center justify-start'>
  <img src={lab} alt='' className='w-44 h-48 mt-5 rounded' />
  <h1 className="mt-4  text-center font-semibold ">Laboratories</h1>
 <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'> See more
  </button>
</div>


 <div className='rounded-xl bg-[#ecdee0] pb-4 w-[250px] h-[280px] flex flex-col items-center justify-start'>
  <img src={library} alt='' className='w-44 h-48 mt-5 rounded' />
  <h1 className="mt-4  text-center font-semibold ">Library</h1>
 <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'> See more
  </button>
</div>

 <div className='rounded-xl bg-[#ecdee0] pb-4 w-[250px] h-[280px] flex flex-col items-center justify-start'>
  <img src={sport} alt='' className='w-44 h-48 mt-5 rounded' />
  <h1 className="mt-4  text-center font-semibold ">Sport</h1>
 <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'> See more
  </button>
</div>

<div className='rounded-xl bg-[#ecdee0] pb-4 w-[250px] h-[280px] flex flex-col items-center justify-start'>
  <img src={tour} alt='' className='w-44 h-48 mt-5 rounded' />
  <h1 className="mt-4  text-center font-semibold ">Tour</h1>
 <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'> See more
  </button>
</div>

 <div className='rounded-xl bg-[#ecdee0] pb-4 w-[250px] h-[280px] flex flex-col items-center justify-start'>
  <img src={hostel} alt='' className='w-44 h-48 mt-5 rounded' />
  <h1 className="mt-4  text-center font-semibold ">Girls Hostel</h1>
 <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'> See more
  </button>
</div>

</div>
</div>

   
     </div>
     </div>
  )
}

export default Home
