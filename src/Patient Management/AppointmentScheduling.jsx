import React, { useState } from 'react'
import { Calendar, Clock, User, FileText, X } from 'lucide-react'



const initialAppointments = [
  { id: '1', date: '2023-06-15', time: '10:00 AM', doctor: 'Dr. Smith', reason: 'Annual check-up' },
  { id: '2', date: '2023-06-20', time: '2:30 PM', doctor: 'Dr. Johnson', reason: 'Follow-up appointment' },
]

export default function AppointmentScheduling() {
  const [appointments, setAppointments] = useState(initialAppointments)
  const [newAppointment, setNewAppointment] = useState({
    date: '',
    time: '',
    doctor: '',
    reason: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewAppointment(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = Math.random().toString(36).substr(2, 9)
    setAppointments(prev => [...prev, { id, ...newAppointment }])
    setNewAppointment({ date: '', time: '', doctor: '', reason: '' })
  }

  const handleCancel = (id) => {
    setAppointments(prev => prev.filter(appointment => appointment.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Appointment Scheduling</h2>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <div className="relative">
              <input
                type="date"
                id="date"
                name="date"
                value={newAppointment.date}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full h-10 p-4 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <div className="relative">
              <input
                type="time"
                id="time"
                name="time"
                value={newAppointment.time}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full h-10 p-4 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          <div>
            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">Doctor</label>
            <div className="relative">
              <select
                id="doctor"
                name="doctor"
                value={newAppointment.doctor}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full h-10 p-4 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option value="">Select a doctor</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Johnson">Dr. Johnson</option>
                <option value="Dr. Williams">Dr. Williams</option>
              </select>
              <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit</label>
            <div className="relative">
              <textarea
                id="reason"
                name="reason"
                value={newAppointment.reason}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                rows={3}
              ></textarea>
              <FileText className="absolute right-3 top-3 text-gray-400" size={18} />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Schedule Appointment
          </button>
        </div>
      </form>

      <h3 className="text-xl font-semibold mb-4">Upcoming Appointments</h3>
      <div className="space-y-4">
        {appointments.map(appointment => (
          <div key={appointment.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-md">
            <div>
              <p className="font-semibold">{appointment.doctor}</p>
              <p className="text-sm text-gray-600">{appointment.date} at {appointment.time}</p>
              <p className="text-sm text-gray-600">{appointment.reason}</p>
            </div>
            <button
              onClick={() => handleCancel(appointment.id)}
              className="text-red-600 hover:text-red-800"
            >
              <X size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}