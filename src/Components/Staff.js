// src/components/StaffTable.jsx
import React from 'react';

const staffMembers = [
  {
    id: 1,
    name: 'Ramesh Shrestha',
    position: 'Principal',
    department: 'Administration',
    email: 'ramesh@ctevt.org.np',
    phone: '9841000001',
  },
  {
    id: 2,
    name: 'Sita Gurung',
    position: 'Instructor',
    department: 'Computer Science',
    email: 'sita@ctevt.org.np',
    phone: '9841000002',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
  },
  {
    id: 3,
    name: 'Bikash Thapa',
    position: 'Accountant',
    department: 'Finance',
    email: 'bikash@ctevt.org.np',
    phone: '9841000003',
  },
];

const Staff = () => {
  return (
    <div className="p-4 mx-6">
      <div className="flex items-center justify-between mt-5 p-3 mb-4 bg-green-100 rounded shadow-sm">
        <h2 className="text-2xl font-bold text-green-900">Staff Details</h2>
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
          onClick={() => alert('Add Staff Clicked!')}
        >
          Add Staff
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border text-left">Name</th>
              <th className="py-2 px-4 border text-left">Position</th>
              <th className="py-2 px-4 border text-left">Department</th>
              <th className="py-2 px-4 border text-left">Email</th>
              <th className="py-2 px-4 border">Phone</th>
            </tr>
          </thead>
          <tbody>
            {staffMembers.map((staff) => (
              <tr key={staff.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border text-center">{staff.id}</td>
                <td className="py-2 px-4 border">{staff.name}</td>
                <td className="py-2 px-4 border">{staff.position}</td>
                <td className="py-2 px-4 border">{staff.department}</td>
                <td className="py-2 px-4 border">{staff.email}</td>
                <td className="py-2 px-4 border text-center">{staff.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Staff;
