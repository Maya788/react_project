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
import maya from './photos/maya.jpg'
import stf2 from './photos/stf2.jpg'
import stf3 from './photos/stf3.jpg'
import sports from './photos/sports.jpg'
import rr from './photos/rr.jpg'
import { NavLink } from 'react-router'


const Home = () => {
  return (
    <div>
     <Caro/>
     {/* principal Message  */}
     <div className='flex gap-32 mt-4  bg-[#f7f7f7]  pb-5'>
      <div>
        <img src={princi} alt='' className='w-56 h-64 mt-10 rounded-xl ml-20'/>
        <h2 className='text-center ml-20 bg-[#810082] text-white rounded-xl h-14 w-56 mt-2'>Tej Pratap Dubey<br/>Principal</h2>
      </div>
      <div className='rounded-xl bg-white ml-14 w-[950px] h-[380px] text-justify mt-4 p-3  '>
<h1 className=' border-b-2  border-gray-300 text-center pt-2 text-3xl font-bold'>Message From Our Principal</h1><br/>
 <h1 className='text-xl'> Dear Students, Parents, and Esteemed Stakeholders.<br/><br/>
It is with great pleasure that I welcome you to Rolpa Poly technic Institute, a prestigious constituent institute of the Council for Technical and Vocational Training. Established in 2074 BS, our institution is committed to providing high-quality technical education and vocational training to the youth of our region and beyond. Located in the hilly areas, where the majority of the population comes from low-income backgrounds, we understand the importance of accessible, skill-based education that can pave the way for a better future.</h1>
 <button className='ml-[650px] rounded-full text-white bg-orange-400 mt-4 py-1 px-2'>
 <NavLink>Read more</NavLink> 
  </button>
      </div>
     </div>
     {/* our programs  */}
     <div className='pb-26'>
       <div>
   <h1 className='border-b-2 text-center  font-bold p-3 text-3xl'>Our Programs</h1>
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
  <img src={tttt} alt='' className='w-44 h-48 mr-6 mt-6 rounded' />
  <h1 className="mt-4 text-center font-semibold">Information Technology</h1>
  <button className='rounded bg-black text-white text-xs py-1 mt-2 px-2'>
   <NavLink to= "/programs/Dit">Read more</NavLink> 
    </button>
</div>
</div>
{/* facilities  */}
     <div className='pb-4 bg-gray-50'>
       <div>
   <h1 className='border-b-2 text-center  font-bold p-3 text-3xl'>Areas of Facilities</h1>
     </div>
    <div className=" flex flex-row  gap-20 mt-8 mx-14 pb-6 ">
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
{/* rip  */}
<div className='flex gap-24 mt-6'>
  <div className='w-[900px]'>
 <h1 className='font-semibold text-3xl ml-8 border-b-2'>Life @ Rolpa Polytechnic Institute</h1>
<h2 className='text-justify ml-10 mt-3 text-xl'>At RPI, we prepare you to launch your career by providing a supportive,
   creative, and professional environment from which you learn practical skills and build a network of industry contacts. At RPI, we prepare you to launch your career by providing a supportive, creative, and professional environment from which you learn practical skills and build a network of industry contacts.</h2>
   <button className='ml-[300px] rounded-full bg-orange-400 mt-4 text-white py-1 px-2'>Read more
  </button>
  </div>
  <div>
    <img src={maya} alt='' className='w-[450px] h-[250px] mr-6 rounded '/>
    
  </div>
</div>
{/* about us  */}
<div className='flex gap-24  bg-gray-50 py-10 mt-6'>
  <div className='w-[900px]'>
 <h1 className='font-semibold text-center text-3xl ml-8 border-b-2'>ABOUT US</h1>
<h2 className='text-justify ml-10 mt-3 text-xl'>The Council for Technical Education and Vocational Training (CTEVT) was established in 1989 as the national apex body for the Technical and Vocational Education and Training (TVET) sector in Nepal. It is mandated to produce basic, middle, and higher level technical workforce essential for the country's development. The Council for Technical Education and Vocational Training was established in 1989 as the national apex body for the Technical and Vocational Education and Training (TVET) sector in Nepal.</h2>
   <button className='ml-[450px] rounded-full bg-orange-400 mt-3 text-white py-1 px-2'>Read more
  </button>
  </div>
  <div>
    <img src={hostel} alt='' className='w-[450px] h-[250px] mr-6 rounded '/>
    
  </div>
</div>
{/* our gallery  */}
<div className='mt-5 '>
  <h1 className='text-center text-3xl border-b-2 font-semibold'>Our Gallery</h1>
  <div className='grid grid-cols-5 ml-14 mt-5 gap-4'>
 <img src={Animal} alt='' className='w-56 h-56 rounded' />
 <img src={sports} alt='' className='w-56 h-56 rounded' />
 <img src={stf2} alt='' className='w-56 h-56 rounded' />
 <img src={rr} alt='' className='w-56 h-56 rounded' />
 <img src={stf3} alt='' className='w-56 h-56 rounded' />
  </div>
  <button className='rounded-full ml-[700px] bg-orange-400 text-white text-xs py-1 mt-8 px-2'> See more
  </button>
</div>

</div>
     </div>
  )
}

export default Home
