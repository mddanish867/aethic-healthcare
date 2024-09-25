import { Link } from "react-router-dom";
import { Star, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('All')

  const doctors = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', experience: '15 years', rating: 4.9 },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Pediatrician', experience: '10 years', rating: 4.8 },
    { id: 3, name: 'Dr. Mike Johnson', specialty: 'Neurologist', experience: '12 years', rating: 4.7 },
    { id: 4, name: 'Dr. Emily Brown', specialty: 'Dermatologist', experience: '8 years', rating: 4.9 },
    { id: 5, name: 'Dr. David Lee', specialty: 'Orthopedic Surgeon', experience: '20 years', rating: 4.8 },
    { id: 6, name: 'Dr. Sarah Wilson', specialty: 'Gynecologist', experience: '14 years', rating: 4.9 },
  ]

  const specialties = ['All', ...new Set(doctors.map(doctor => doctor.specialty))]

  const filteredDoctors = doctors.filter(doctor => 
    (selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty) &&
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Doctors</h1>
        
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <input
            type="text"
            placeholder="Search doctors..."
            className="w-full md:w-64 px-4 py-2 rounded-md border border-gray-300 mb-4 md:mb-0"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full md:w-64 px-4 py-2 rounded-md border border-gray-300"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            {specialties.map(specialty => (
              <option key={specialty} value={specialty}>{specialty}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src={`https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80=${doctor.name}`} alt={doctor.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">{doctor.name}</h3>
              <p className="text-gray-600 text-center mb-2">{doctor.specialty}</p>
              <p className="text-gray-600 text-center mb-4">Experience: {doctor.experience}</p>
              <div className="flex justify-center items-center text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`h-5 w-5 ${star <= Math.floor(doctor.rating) ? 'fill-current' : 'stroke-current'}`} />
                ))}
                <span className="ml-2 text-gray-600">{doctor.rating}</span>
              </div>
              <div className="flex justify-center space-x-4">
                <Link to={`/doctors/${doctor.id}`} className="text-blue-600 hover:underline">
                  View Profile
                </Link>
                <Link to={`/appointment?doctor=${doctor.id}`} className="text-green-600 hover:underline flex items-center">
                  <Calendar className="h-4 w-4 mr-1" /> Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}