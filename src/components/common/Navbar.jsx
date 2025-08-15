import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#11383c] text-white px-10 py-6 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0 text-xl font-bold">ElectroMart</div>
        <div className="flex-1 flex justify-center space-x-8">
          <a href="#home" className="text-lg">Home</a>
          <a href="#services" className="text-lg">Services</a>
          <a href="#about" className="text-lg">About</a>
          <button onClick={() => navigate('/admin')} className="text-lg">Admin Panel</button>
        </div>
        <div className="flex space-x-6">
          <button onClick={() => navigate('/login')} className="text-lg">Login</button>
          <button onClick={() => navigate('/signup')} className="text-lg">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
