import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#11383c] text-white py-10">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Section: Company Info */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-6">
            <h2 className="text-xl font-bold mb-4">ElectroMart Warehouse</h2>
            <p className="text-sm">
              Your trusted hub for managing and tracking electronic inventory. From smartphones to industrial devices, we streamline your warehouse operations.
            </p>
          </div>

          {/* Right Section: Links + Contact */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-8 pl-20 justify-between">
            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#dashboard" className="hover:underline">Dashboard</a></li>
                <li><a href="#inventory" className="hover:underline">Inventory</a></li>
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#support" className="hover:underline">Support</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className='pr-6'>
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <p className="text-sm">123 Tech Park, Bengaluru, India</p>
              <p className="text-sm"> +91 98765 43210</p>
              <p className="text-sm"> support@electromart.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/80">
          © 2025 ElectroMart Warehouse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
