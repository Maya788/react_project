import React from 'react'
import sanjeev from'./assets/sajeev.jpg'
import vet from './assets/vet.jpg'
const Animal = () => {
  return (
    <div>
      <div className='bg-blue-gray-50 mt-6 underline text-center text-3xl font-semibold p-4 '>About of Animal Science</div>
      <div className='flex mt-5 bg-blue-gray-50'>
       <div className='text-justify'>
<img src={vet} alt='' className='rounded-xl mt-20 h-64 ml-28 w-64' />
      </div>
       <div className='rounded-xl  w-[980px] h-[450px] ml-80 p-5 mr-28'>
        <h1 className='  font-semibold text-2xl text-center underline mt-4 '> Animal Science</h1> <br/>
        <h2>Dear Student and Parents,</h2> <br/> 
<h2 >I hope this Message finds you well. As the Agriculture Co-ordinator, I would like to take a moment to 
  share the exciting opportunities available in our agricultural program. Agriculture plyas a vital role
   in our communities, not just as a career path,but as an essential part of our everyday lives.</h2>
      </div>
      </div>
       <div className='flex mt-4 bg-gray-50 py-14 '>
        <div className='ml-28 mt-4'>
        <div >
<img src={sanjeev} alt='' className='rounded-xl mt-20 h-72 w-60' />
<h2 className='text-center  bg-orange-50 rounded-xl h-14 w-60 mt-2'>Dr.Sanjeev Acharya <br/>Animal Science Co-odinator</h2>
      </div>
        </div>
        <div className='rounded-xl bg-white ml-56 w-[800px] h-[450px] text-justify p-5 '>
        <h1 className='  font-bold border-b-2  text-center text-2xl  '>Message From Animal Science Co-ordinator</h1><br/>
        <h2>Dear Students,</h2> <br/>
<h2>Greetings from Rolpa Polytechnic Institute! <br/>Welcome to the Department of Animal Science!
   It is my pleasure to introduce you to the field of Animal Science, an essential discipline dedicated to the health and well-being of animals. As the veterinary coordinator, my goal is to ensure that students must provide a comprehensive curriculum that combines theoretical knowledge with hands-on clinical training. We have well-equipped labs, clinics, farms and friendly teaching-learning environment with well qualified and supporting teaching staffs for research facilities that help students to gain practical experience. We are committed to excellence in education, research, and clinical practice, ensuring that future veterinarians are well-equipped to care for animals and contribute to public health.<br/><br/>
Best regards,<br/>
Dr.Sanjeev Acharya<br/>
Veterinary Coordinator.</h2>
      </div>
      </div>
      </div>
  )
}

export default Animal
