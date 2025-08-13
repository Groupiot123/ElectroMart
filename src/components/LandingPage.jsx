import React from 'react';
import Navbar from './common/Navbar';
import bgofweb from '../assets/bgOfweb.png'; 
import Footer from './common/Footer';


const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="bg-gray-100 text-center py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">WareHouse management made easy</h1>
        <p className="text-lg text-gray-600">Manage multiple warehouse, transfer stock between them and generate reports to get better insights about warehouse management, with corporations.</p>
      </header>

     <div>
      <img src={bgofweb} alt='bgofweb'/>
     </div>

      
<Footer />
    </div>
  );
};

export default LandingPage;
