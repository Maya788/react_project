import React from 'react'
import hostel from './assets/hostel.jpg'
const Aaa = () => {
  return (
    <div>
     <div className='flex gap-24  bg-gray-50 p-4 mt-6'>
  <div className='w-[900px]'>
 <h1 className='font-semibold text-center text-3xl ml-8 underline '>ABOUT US</h1>
<h2 className='text-justify ml-10 mt-3 text-xl'>The Council for Technical Education and Vocational Training (CTEVT) was established in 1989 as the national apex body for the Technical and Vocational Education and Training (TVET) sector in Nepal. It is mandated to produce basic, middle, and higher level technical workforce essential for the country's development. The Council for Technical Education and Vocational Training was established in 1989 as the national apex body for the Technical and Vocational Education and Training (TVET) sector in Nepal.<br/> <br/>
The Rolpa Polytechnic Institute (RPI) college was established in 2017. It developed for the students skills standards, skill testing, quality assurance and providing trainings. The Rolpa Polytechnic Institute (RPI) college was established in 2017. It developed for the students skills standards, skill testing, quality assurance and providing trainings.</h2>

  </div>
  <div>
    <img src={hostel} alt='' className='w-[450px] h-[250px] mr-6 mt-20 rounded '/>
    
  </div>
</div>
    </div>
  )
}

export default Aaa
