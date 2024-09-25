import { Calendar, Video, Pill, Stethoscope, Microscope, Syringe, Thermometer, Activity, Heart } from 'lucide-react'
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    { icon: Calendar, title: 'Appointment Booking', description: 'Schedule your visit with our experienced doctors.', link: '/appointment' },
    { icon: Video, title: 'Online Consultation', description: 'Get expert medical advice from the comfort of your home.', link: '/consultation' },
    { icon: Pill, title: 'Medicine Distribution', description: 'Get your prescribed medications delivered to your doorstep.', link: '/pharmacy' },
    { icon: Stethoscope, title: 'General Check-up', description: 'Comprehensive health check-ups for overall well-being.', link: '/checkup' },
    { icon: Microscope, title: 'Laboratory Services', description: 'State-of-the-art lab tests and diagnostics.', link: '/lab-services' },
    { icon: Syringe, title: 'Vaccination', description: 'Immunization services for all age groups.', link: '/vaccination' },
    { icon: Thermometer, title: 'Fever Clinic', description: 'Specialized care for patients with fever and related symptoms.', link: '/fever-clinic' },
    { icon: Activity, title: 'Emergency Care', description: '24/7 emergency medical services.', link: '/emergency' },
    { icon: Heart, title: 'Cardiology', description: 'Expert care for heart-related conditions.', link: '/cardiology' },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={service.link} className="text-blue-600 hover:underline">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}