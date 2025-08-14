import React from 'react';
import Navbar from './common/Navbar';
import bgofweb from '../assets/bgOfweb.png'; 
import Footer from './common/Footer';

const LandingPage = ({ onLoginClick }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Pass the login click handler to Navbar */}
      <Navbar onLoginClick={onLoginClick} />

      {/* Hero Section */}
      <header className="bg-gray-100 text-center py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Warehouse management made easy</h1>
        <p className="text-lg text-gray-600">
          Manage multiple warehouses, transfer stock between them, and generate reports to gain better insights into warehouse operations with corporations.
        </p>
      </header>

      {/* Background Image Section */}
      <div>
        <img src={bgofweb} alt="Warehouse background" className="w-full h-auto" />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
