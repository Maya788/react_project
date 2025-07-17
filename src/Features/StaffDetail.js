// src/components/StaffDetail.jsx
import React from 'react';
import oli from './photos/oli.jpg'
import princisr from './photos/princisr.jpg'
import dhamendra from './photos/dhamendra.jpg'

const staffMembers = [
  {
    id: 1,
    name: 'Tej Pratap Dubey',
    position: 'Principal',
    department: 'Administration',
    email: 'ramesh@ctevt.org.np',
    phone: '9857824891',
    image: princisr,
  },
  {
    id: 2,
    name: 'Dharmendra Kawar',
    position: '',
    department: 'Administration',
    email: 'sita@ctevt.org.np',
    phone: '9841000002',
    image: dhamendra,
  },
  {
    id: 3,
    name: 'Dharmajit Oli',
    position: 'Administration',
    department: 'Exam',
    email: 'exam.ctevtrpi@gmail.com',
    phone: '9857874775',
   image:oli,
   
  },
   {
    id: 4,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
    image: ''
  },
   {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
    image: 'https://randomuser.me/api/portraits/men/33.jpg'
  },
   {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
    image: 'https://randomuser.me/api/portraits/men/33.jpg'
  },
   {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
    image: 'https://randomuser.me/api/portraits/men/33.jpg'
  },
   {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
    image: 'https://randomuser.me/api/portraits/men/33.jpg'
  },
   {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
    image: 'https://randomuser.me/api/portraits/men/33.jpg'
  },

];

const Staff = () => {
  return (
    <div>
      <div className="bg-gray-50   m-3 underline text-center  text-2xl font-semibold p-4 ">Our Staff</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4">
        {staffMembers.map((staff) => (
          <div key={staff.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center border">
            <img
              src={staff.image}
              alt={staff.name}
              className="w-28 h-28 object-cover rounded-full mb-4 border-2 border-green-300"
            />
            <h3 className="text-xl font-semibold text-gray-800">{staff.name}</h3>
            <p className="text-green-600">{staff.position}</p>
            <p className="text-gray-500">{staff.department}</p>
            <div className="mt-2 text-sm text-gray-600">
              <p><strong>Email:</strong> {staff.email}</p>
              <p><strong>Phone:</strong> {staff.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
