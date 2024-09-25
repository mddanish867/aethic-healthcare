import { Link } from "react-router-dom";
import { Phone, Star } from "lucide-react";
import Services from "./Services";

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Your Health, Our Priority
              </h1>
              <p className="text-xl mb-6">
                Experience top-quality healthcare services tailored to your
                needs.
              </p>
              <Link
                href="/appointment"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
              >
                Book an Appointment
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Healthcare professionals"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services/>

      {/* Emergency Services */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                24/7 Emergency Services
              </h2>
              <p className="text-xl">
                Our emergency team is always ready to provide immediate medical
                attention.
              </p>
            </div>
            <div>
              <Link
                href="/emergency"
                className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center"
              >
                <Phone className="mr-2" /> Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Expert Doctors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((doctor) => (
              <div key={doctor} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={`https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80&text=Doctor${doctor}`}
                  alt={`Doctor ${doctor}`}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">
                  Dr. John Doe
                </h3>
                <p className="text-gray-600 text-center mb-4">Cardiologist</p>
                <div className="flex justify-center items-center text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <Link
                  href={`/doctors/${doctor}`}
                  className="block text-center text-blue-600 hover:underline"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Patients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((testimonial) => (
              <div
                key={testimonial}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-600 mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet."
                </p>
                <div className="flex items-center">
                  <img
                    src={`https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80&text=P${testimonial}`}
                    alt={`Patient ${testimonial}`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Jane Smith</h4>
                    <p className="text-gray-600">Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Book an appointment or consult with our doctors online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/appointment"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              Book Appointment
            </Link>
            <Link
              href="/consultation"
              className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition duration-300"
            >
              Online Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
