import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#11383c] text-white px-10 py-6 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0 text-xl font-bold">
          ElectroMart
        </div>

        {/* Center: Navigation Links */}
        <div className="flex-1 flex justify-center space-x-8">
          <a href="#home" className="text-lg">Home</a>
          <a href="#services" className=" text-lg">Services</a>
          <a href="#about" className=" text-lg">About</a>
        </div>

        {/* Right: Auth Links */}
        <div className="flex space-x-6">
          <a href="#login" className=" text-lg">Login</a>
          <a href="#signup" className=" text-lg">Signup</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
