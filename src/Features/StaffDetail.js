// src/components/StaffDetail.jsx
import React from 'react';

const staffMembers = [
  {
    id: 1,
    name: 'Ramesh Shrestha',
    position: 'Principal',
    department: 'Administration',
    email: 'ramesh@ctevt.org.np',
    phone: '9841000001',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    id: 2,
    name: 'Sita Gurung',
    position: 'Instructor',
    department: 'Computer Science',
    email: 'sita@ctevt.org.np',
    phone: '9841000002',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
    image: 'https://randomuser.me/api/portraits/men/33.jpg'
  }
];

const Staff = () => {
  return (
    <div className="p-6 mx-4">
      <div className="text-3xl font-bold mb-6 text-green-700 text-center">Our Staff</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
