import React from 'react'
import AGG from './assets/AGG.jpg'
import pawan from './assets/pawan..jpg'
const Plant = () => {
  return (
   <div>
      <div className='bg-gray-50 mt-6 underline text-center  text-2xl font-semibold p-4 '>About of Plant Science
</div>
      <div className='flex mt-5 bg-blue-gray-50'>
       <div >
<img src={AGG} alt='' className='rounded-xl mt-16 h-56 ml-28 w-80' />
      </div>
       <div className='rounded-xl  w-full h-[360px] ml-80 p-4 mr-28'>
        <h1 className='  font-bold text-center text-2xl underline mt-4 '>Plant Science</h1>
<h2  className='text-justify text-xl mt-10'>Plant science, also known as botany, is a vibrant field that explores the biology of plants and their interactions with the environment. This discipline encompasses various aspects, including plant physiology, genetics, ecology, taxonomy, and horticulture. Plant scientists investigate how plants grow, develop, and reproduce, focusing on processes such as photosynthesis, nutrient uptake, and response to environmental stressors. Genetics plays a crucial role in plant science, as researchers work on breeding strategies to enhance desirable traits like disease resistance, yield, and climate adaptability.</h2>
      </div>
      </div>
       <div className='flex  bg-gray-50 mt-7 py-10 '>
        <div className='ml-28 '>
        <div >
<img src={pawan} alt='' className='rounded-xl mt-5 h-80 w-60' />
<div className='bg-orange-50 rounded-xl  h-14 w-60'>
      <h2 className='text-center mt-2'>Pawan Kumar Khadka</h2>
      <h2 className='text-center'>Plant Science Co-odinator</h2>
      </div>
      </div>
        </div>
        <div className='rounded-xl bg-white ml-56 w-[800px] h-[450px] text-justify p-5 '>
        <h1 className=' font-bold text-center text-2xl underline '>Message From Plant Science Co-ordinator</h1><br/>
        <h2 >Dear Student and Parents,<br/>
I hope this message finds you well. As the Agriculture Coordinator, I would like to take a moment to share the exciting opportunities available in our agricultural program. Agriculture plays a vital role in our communities, not just as a career path, but as an essential part of our everyday lives. To the students, I encourage you to explore the many aspects of agriculture, from sustainable farming practices to innovative agricultural technologies. These subjects will not only broaden your knowledge but will also prepare you for a wide range of future opportunities in an industry that is continually evolving. Be curious, engaged, and proactive in your learning journey. We look forward to an exciting year of learning and growth in agriculture, and we are here to support every student in their journey.<br/> <br/>
Thank you for your continuous support.<br/><br/>
Warm regards,<br/>
Pawan Kumar Khadka<br/>
Agriculture Coordinator</h2>
      </div>
      </div>
      </div>
   
  )
}

export default Plant
