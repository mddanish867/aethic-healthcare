import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-blue-600 ">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            HealthCare
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:underline">Home</Link>
            <Link to="/services" className="text-white hover:underline">Services</Link>
            <Link to="/doctors" className="text-white hover:underline">Doctors</Link>
            <Link to="/blog" className="text-white hover:underline">Blog</Link>
            <Link to="/contact" className="text-white hover:underline">Contact</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            
            <button className="border border-white text-white px-4 py-2 rounded-md transition duration-300">
              Login
            </button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="text-white h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-blue-600 py-2">
            <nav className="flex flex-col space-y-2 px-4">
            <Link to="/" className="text-white hover:underline">Home</Link>
            <Link to="/services" className="text-white hover:underline">Services</Link>
            <Link to="/doctors" className="text-white hover:underline">Doctors</Link>
            <Link to="/blog" className="text-white hover:underline">Blog</Link>
            <Link to="/contact" className="text-white hover:underline">Contact</Link>
            </nav>
            <div className="mt-4 px-4 space-y-2">
             
              <button className="w-full bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md transition duration-300">
                Login
              </button>
            </div>
          </div>
        )}
      </header>
     
    </>
  )
}