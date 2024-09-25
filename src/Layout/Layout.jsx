import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {

  return (
    <div className="min-h-screen flex flex-col">
     <Navbar/>
      <main className="flex-grow">
        <Outlet/>
      </main>
     <Footer/>
    </div>
  )
}