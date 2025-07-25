import React from 'react'
import ssss from './assets/ssss.jpg'
import tttt from './assets/tttt.png'
const Dit = () => {
  return (
    <div>
      <div className='bg-blue-gray-50 mt-6 underline text-2xl text-center font-semibold p-4 '>About of Information Technology</div>
      <div className='flex mt-5 bg-blue-gray-50'>
       <div >
<img src={tttt} alt='' className='rounded-xl mt-10 h-52 ml-28 w-72' />
      </div>
       <div className='rounded-xl  w-full h-[300px] ml-80 p-4 mr-28'>
        <h1 className='  font-bold text-center text-2xl underline mt-4 '> Information Technology</h1>
        <h2 className='text-justify text-xl mt-10'>Information technology is a set of related fields that encompass computer systems, software, programming languages, data and information processing, and storage. IT forms part of information and communications technology. IT makes communication more efficient and allows for remote work. IT includes software and hardware that make communication possible on the internet and within organizations.</h2>
      </div>
      </div>
       <div className='flex mt-5 bg-gray-50 py-10 '>
        <div className='ml-28 '>
        <div>
<img src={ssss} alt='' className='rounded-xl mt-5 h-72 w-60' />
<div className='bg-orange-50 rounded-xl h-14 w-60'>
      <h2 className='text-center mt-2'>Sushil Kc</h2>
      <h2 className='text-center'>IT Co-odinator</h2>
      </div>
      </div>
        </div>
        <div className='rounded-xl bg-white ml-56 w-[800px] h-[400px] text-justify p-5 '>
           <h1 className='  font-bold text-center text-2xl underline  '>Message From IT Co-ordinator</h1>
        <h2>Dear Student and Parent,<br/><br/>
Greetings from Rolpa Polytechnic Institute!<br/>
As the IT Coordinator, my goal is to ensure that students have access to the best technology resources for their education. We are committed to providing a smooth digital learning experience through reliable internet access, online learning platforms, and IT support services. For any technical assistance or inquiries, please feel free to contact our IT team. We encourage students to use technology responsibly and make the most of the digital tools available. Thank you for your support. Let's work together for a bright future!<br/><br/>
Best regards<br/>
Sushil KC<br/>
IT Coordinator<br/>
Rolpa Polytechnic Institute</h2>
      </div>
      </div>
      </div>
   
  )
}

export default Dit
