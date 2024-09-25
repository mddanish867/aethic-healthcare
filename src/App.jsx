import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./LandingPage";
import Services from "./Services";
import Doctors from "./Doctors";
import Blog from "./Blog";
import Contact from "./Contact";
import BlogDetails from "./BlogDetails";
import DoctorProfile from "./DoctorProfile";
import BookAppointment from "./BookAppointment";
function App() {
  

  return (
    <Router>
      <Routes>
        <Route element={<Layout/> }>
        <Route path="/" element={<Home/> }/>      
        <Route path="/services" element={<Services/> }/>      
        <Route path="/doctors" element={<Doctors/> }/>    
        <Route path="/doctors/:id" element={<DoctorProfile />} />  
        <Route path="/blog" element={<Blog/> }/>   
        <Route path="/blog/:id" element={<BlogDetails />} />   
        <Route path="/contact" element={<Contact/> }/>      
        <Route path="/appointment" element={<BookAppointment/> }/> 
        </Route>  
             

      </Routes>      
    </Router>
  )
}

export default App
