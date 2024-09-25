import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HealthCare</h3>
              <p className="text-gray-400">Providing quality healthcare services to our community.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
                <Link to="/services" className="text-gray-400 hover:text-white">Services</Link>
                <Link to="/doctors" className="text-gray-400 hover:text-white">Doctors</Link>
                <Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </nav>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">123 Healthcare St, Medical City, HC 12345</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
              <p className="text-gray-400">Email: info@healthcare.com</p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © 2023 HealthCare. All rights reserved.
          </div>
        </div>
      </footer> 
    </>
  )
}

export default Footer
