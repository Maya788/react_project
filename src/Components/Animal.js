import React from 'react'
import sanjeev from'./assets/sajeev.jpg'
import vet from './assets/vet.jpg'
const Animal = () => {
  return (
    <div>
      <div className='bg-blue-gray-50 mt-6 underline text-center text-2xl font-semibold p-4 '>About of Animal Science</div>
      <div className='flex mt-5 bg-blue-gray-50'>
       <div className='text-justify'>
<img src={vet} alt='' className='rounded-xl mt-20 h-56 ml-28 w-80' />
      </div>
       <div className='rounded-xl  w-full h-[360px] ml-80 p-4 mr-28'>
        <h1 className='  font-bold text-center text-2xl underline mt-4 '> Animal Science</h1>
<h2  className='text-justify text-xl mt-10' >Animal science is a multidisciplinary field that focuses on the study of animals, addressing various aspects such as their biology, physiology, nutrition, genetics, behavior, and management practices. It encompasses the understanding of how animals function biologically and respond to their environments, as well as the nutritional needs critical for their health and productivity. Key areas include genetics and breeding, which aim to enhance traits like productivity and resistance to diseases, and animal behavior, which examines how animals interact within their social structures and habitats.</h2>
      </div>
      </div>
       <div className='flex mt-5 bg-gray-50 py-10'>
        <div className='ml-28'>
        <div >
<img src={sanjeev} alt='' className='rounded-xl mt-12 h-72 w-60' />
<h2 className='text-center  bg-orange-50 rounded-xl h-14 w-60 mt-2'>Dr.Sanjeev Acharya <br/>Animal Science Co-odinator</h2>
      </div>
        </div>
        <div className='rounded-xl bg-white ml-56 w-[800px] h-[450px] text-justify p-5'>
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
