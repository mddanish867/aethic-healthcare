import { Star, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { Link } from "react-router-dom";

// Dummy data for a doctor
const doctorData = {
  id: 1,
  name: "Dr. Emily Johnson",
  specialty: "Cardiologist",
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  address: "123 Medical Center Blvd, Healthville, HV 12345",
  phone: "+1 (555) 123-4567",
  email: "dr.johnson@healthcareclinic.com",
  qualification: "MD in Cardiology, Harvard Medical School",
  experience: "15 years",
  expertise: ["Interventional Cardiology", "Echocardiography", "Preventive Cardiology"],
  casesHandled: 5000,
  successRate: 98.5,
  bio: "Dr. Emily Johnson is a board-certified cardiologist with over 15 years of experience in diagnosing and treating heart conditions. She specializes in interventional cardiology and has performed over 1,000 successful angioplasties and stent placements. Dr. Johnson is known for her patient-centered approach and dedication to preventive cardiology.",
  awards: [
    "American Heart Association Young Investigator Award, 2015",
    "Top Cardiologist, Healthville Medical Association, 2018-2022"
  ],
  publications: [
    "Johnson, E. et al. (2020). 'New Frontiers in Preventive Cardiology', Journal of Cardiovascular Medicine",
    "Johnson, E. & Smith, R. (2018). 'Long-term Outcomes of Stent Placements in Elderly Patients', Cardiology Today"
  ]
}

export default function DoctorProfile() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column: Image and contact info */}
          <div className="md:col-span-1">
            <img 
              src={doctorData.image} 
              alt={doctorData.name} 
              className="w-full h-auto rounded-lg shadow-lg mb-6"
            />
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                  <span>{doctorData.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-500 mr-2" />
                  <span>{doctorData.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-500 mr-2" />
                  <span>{doctorData.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Doctor details */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-2">{doctorData.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{doctorData.specialty}</p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-700 mb-4">{doctorData.bio}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Qualification</h3>
                  <p>{doctorData.qualification}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Experience</h3>
                  <p>{doctorData.experience}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold mb-4">Expertise</h2>
              <ul className="list-disc list-inside space-y-2">
                {doctorData.expertise.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold mb-4">Performance</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cases Handled</h3>
                  <p className="text-3xl font-bold text-blue-600">{doctorData.casesHandled.toLocaleString()}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Success Rate</h3>
                  <p className="text-3xl font-bold text-green-600">{doctorData.successRate}%</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold mb-4">Awards & Recognition</h2>
              <ul className="list-disc list-inside space-y-2">
                {doctorData.awards.map((award, index) => (
                  <li key={index} className="text-gray-700">{award}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold mb-4">Publications</h2>
              <ul className="list-disc list-inside space-y-2">
                {doctorData.publications.map((publication, index) => (
                  <li key={index} className="text-gray-700">{publication}</li>
                ))}
              </ul>
            </div>

            <Link 
              to={`/appointment?doctor=${doctorData.id}`}
              className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              <Calendar className="inline-block mr-2" />
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}