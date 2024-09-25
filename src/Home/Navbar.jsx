import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            HealthCare
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/doctors" className="text-gray-600 hover:text-blue-600">Doctors</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <form className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Login
            </button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2">
            <nav className="flex flex-col space-y-2 px-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
              <Link to="/doctors" className="text-gray-600 hover:text-blue-600">Doctors</Link>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            </nav>
            <div className="mt-4 px-4 space-y-2">
              <form className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </form>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                Login
              </button>
            </div>
          </div>
        )}
      </header>
     
    </>
  )
}