import React from 'react';

const DashboardMainPanel = () => {
  return (
    <div className="space-y-6">
      {/* Dashboard Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-50  p-6 pt-2 rounded-lg">
          <h3 className="text-xl font-semibold">Available Position</h3>
          <p className="text-3xl font-bold mt-2">24</p>
          <p className="text-sm text-red-500 mt-1">4 Urgently needed</p>
        </div>
        <div className="bg-blue-50  p-6 pt-2 rounded-lg">
          <h3 className="text-2xl font-semibold">Job Open</h3>
          <p className="text-3xl font-bold mt-2">10</p>
          <p className="text-sm text-blue-500 mt-1">4 Active hiring</p>
        </div>
        <div className="bg-fuchsia-100 p-6 pt-2 rounded-lg">
          <h3 className="text-xl font-semibold">New Employees</h3>
          <p className="text-3xl font-bold mt-2">24</p>
          <p className="text-sm text-pink-500 mt-1">4 Department</p>
        </div>
      </div>

      {/* Employee Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border  p-6 pt-2 rounded-lg">
          <h3 className="text-xl font-semibold">Total Employees</h3>
          <p className="text-3xl font-bold mt-2">216</p>
          <p className="text-sm text-gray-500 mt-1">120 Men, 96 Women</p>
        </div>
        <div className="bg-white border p-6 pt-2 rounded-lg">
          <h3 className="text-xl font-semibold">Talent Request</h3>
          <p className="text-3xl font-bold mt-2">16</p>
          <p className="text-sm text-gray-500 mt-1">6 Men, 10 Women</p>
        </div>
      </div>

      {/* Announcement Section */}
      <div className="bg-white border p-6 pt-2 rounded-lg">
        <h3 className="text-lg font-semibold">Announcement</h3>
        <ul className="mt-4 space-y-3 border-b ">
          <li className="flex justify-between items-center">
            <div>
              <p className='text-xl'>Outing schedule for every department</p>
              <span className="text-sm text-gray-400">5 minutes ago</span>
            </div>
            <span className="text-gray-400">★</span>
          </li>
          <li className="flex justify-between items-center">
            <div>
              <p className='text-xl'>Meeting HR Department</p>
              <span className="text-sm text-gray-400">Yesterday, 12:30 PM</span>
            </div>
            <span className="text-gray-400">★</span>
          </li>
          <li className="flex justify-between items-center">
            <div>
              <p>IT Department need two more talents for UX/UI Designer</p>
              <span className="text-sm text-gray-400">Yesterday, 09:15 AM</span>
            </div>
            <span className="text-gray-400">★</span>
          </li>
          
        </ul>

        <p className=" text-red-500 text-sm mt-4 text-center">See All Announcement</p>
      </div>
    </div>
  );
};

export default DashboardMainPanel;
