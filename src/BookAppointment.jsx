import { useState, useEffect } from 'react'
import { Calendar, Clock, User, FileText, CheckSquare } from 'lucide-react'
import { useParams } from 'react-router-dom'

// Dummy data for doctors
const doctors = [
  { 
    id: 1, 
    name: "Dr. Emily Johnson", 
    specialty: "Cardiologist",
    expertise: ["Interventional Cardiology", "Echocardiography", "Preventive Cardiology"]
  },
  { 
    id: 2, 
    name: "Dr. Michael Lee", 
    specialty: "Pediatrician",
    expertise: ["Neonatal Care", "Childhood Immunizations", "Developmental Disorders"]
  },
  { 
    id: 3, 
    name: "Dr. Sarah Brown", 
    specialty: "Dermatologist",
    expertise: ["Skin Cancer Screening", "Cosmetic Dermatology", "Pediatric Dermatology"]
  },
  { 
    id: 4, 
    name: "Dr. David Wilson", 
    specialty: "Orthopedic Surgeon",
    expertise: ["Joint Replacement", "Sports Medicine", "Spine Surgery"]
  },
]

// Dummy data for available time slots
const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"
]

export default function BookAppointment() {
  
  const { doctorId } = useParams();

  const [selectedDoctor, setSelectedDoctor] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [reason, setReason] = useState('')
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    if (doctorId) {
      setSelectedDoctor(doctorId.toString())
    }
  }, [doctorId])

  useEffect(() => {
    // Reset time when date changes
    setSelectedTime('')
  }, [selectedDate])

  const validateForm = () => {
    const newErrors = {}
    if (!selectedDoctor) newErrors.doctor = "Please select a doctor"
    if (!selectedDate) newErrors.date = "Please select a date"
    if (!selectedTime) newErrors.time = "Please select a time"
    if (!reason.trim()) newErrors.reason = "Please provide a reason for your visit"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubmitting(false)
      setSubmitSuccess(true)
      // Reset form
      setSelectedDoctor('')
      setSelectedDate('')
      setSelectedTime('')
      setReason('')
    }
  }

  const selectedDoctorData = doctors.find(doctor => doctor.id.toString() === selectedDoctor)

  if (submitSuccess) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
            <p className="font-bold">Appointment Booked Successfully!</p>
            <p>We've sent a confirmation email with the details of your appointment.</p>
          </div>
          <button
            onClick={() => {
              setSubmitSuccess(false)
              router.push('/doctors')
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Back to Doctors
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Book an Appointment</h1>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="mb-6">
            <label htmlFor="doctor" className="block text-gray-700 text-sm font-bold mb-2">
              Select Doctor
            </label>
            <div className="relative">
              <select
                id="doctor"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              >
                <option value="">Select a doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.specialty}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <User className="h-4 w-4" />
              </div>
            </div>
            {errors.doctor && <p className="text-red-500 text-xs italic mt-1">{errors.doctor}</p>}
          </div>

          {selectedDoctorData && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Doctor's Expertise</h3>
              <ul className="list-disc list-inside">
                {selectedDoctorData.expertise.map((item, index) => (
                  <li key={index} className="text-gray-700 mb-1">
                    <CheckSquare className="inline-block h-4 w-4 mr-2 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
              Select Date
            </label>
            <div className="relative">
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="block w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Calendar className="h-4 w-4" />
              </div>
            </div>
            {errors.date && <p className="text-red-500 text-xs italic mt-1">{errors.date}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">
              Select Time
            </label>
            <div className="relative">
              <select
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                disabled={!selectedDate}
              >
                <option value="">Select a time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Clock className="h-4 w-4" />
              </div>
            </div>
            {errors.time && <p className="text-red-500 text-xs italic mt-1">{errors.time}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="reason" className="block text-gray-700 text-sm font-bold mb-2">
              Reason for Visit
            </label>
            <div className="relative">
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="block w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                rows="4"
                placeholder="Please briefly describe the reason for your visit"
              ></textarea>
              <div className="pointer-events-none absolute top-3 right-2 text-gray-700">
                <FileText className="h-4 w-4" />
              </div>
            </div>
            {errors.reason && <p className="text-red-500 text-xs italic mt-1">{errors.reason}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 w-full"
            >
              {isSubmitting ? 'Booking...' : 'Book Appointment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}