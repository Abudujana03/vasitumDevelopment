// import React from 'react';
// import { FaHome, FaUserFriends, FaCalendar, FaUsers, FaCog } from 'react-icons/fa';

// const Sidebar = () => {
//   return (
//     <div className="bg-gray-100  h-screen shadow-lg">
//       <div className="p-4 pb-2">
//         <h1 className="text-2xl font-bold text-blue-600">Vasitum</h1>
//       </div>
//       <nav className="mt-2">
//         <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
//           <FaHome className="mr-4" /> Dashboard
//         </a>
//         <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
//           <FaUserFriends className="mr-4" /> Recruitment
//         </a>
//         <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
//           <FaCalendar className="mr-4" /> Schedule
//         </a>
//         <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
//           <FaUsers className="mr-4" /> Employee
//         </a>
//         <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
//           <FaCog className="mr-4" /> Settings
//         </a>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState } from 'react';
import { FaHome, FaUserFriends, FaCalendar, FaUsers, FaCog, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility on small screens
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Menu Icon for Small Screens */}
      <div className="p-4 md:hidden">
        <FaBars className="text-2xl cursor-pointer" onClick={toggleSidebar} />
      </div>

      {/* Sidebar */}
      <div className={`bg-gray-100 h-screen shadow-lg fixed z-10 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="p-4 pb-2">
          <h1 className="text-2xl font-bold text-blue-600 hidden md:block">Vasitum</h1>
        </div>
        <nav className="mt-2">
          <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
            <FaHome className="text-xl" />
            <span className="hidden lg:block ml-4">Dashboard</span>
          </a>
          <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
            <FaUserFriends className="text-xl" />
            <span className="hidden lg:block ml-4">Recruitment</span>
          </a>
          <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
            <FaCalendar className="text-xl" />
            <span className="hidden lg:block ml-4">Schedule</span>
          </a>
          <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
            <FaUsers className="text-xl" />
            <span className="hidden lg:block ml-4">Employee</span>
          </a>
          <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
            <FaCog className="text-xl" />
            <span className="hidden lg:block ml-4">Settings</span>
          </a>
        </nav>
      </div>

      {/* Overlay for small screens when sidebar is open */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

export default Sidebar;
