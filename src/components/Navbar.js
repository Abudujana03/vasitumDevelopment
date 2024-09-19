import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa'
import { RiMessage2Fill } from "react-icons/ri"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white">
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 bg-gray-100 rounded-md p-2 pl-4 w-full"
        />
        <FaSearch
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
          size={20}
        />
      </div>
      <div className="flex items-center space-x-6">
        <FaBell className="text-gray-600" />
        <RiMessage2Fill className="text-gray-500" size={20}/>
        <FaUserCircle className="text-gray-600" size={30} />
      </div>
    </div>
  );
};

export default Navbar;
