import React from 'react';


const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="text-xl font-bold">WareHouse</div>
        <ul className="flex space-x-6">
          
          <li><a href="#login" className="hover:underline">Login</a></li>
          <li><a href="#signup" className="hover:underline">Signup</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="bg-gray-100 text-center py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">WareHouse management made easy</h1>
        <p className="text-lg text-gray-600">Manage multiple warehouse, transfer stock between them and generate reports to get better insights about warehouse management, with corporations.</p>
      </header>

     

      
      <footer className="bg-blue-600 text-white py-6 mt-auto">
        <div className="text-center">
          <p className="font-semibold">TEAM - A © 2025</p>
          <div className="mt-2 space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
