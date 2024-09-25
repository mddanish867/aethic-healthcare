import React, { useState } from 'react'
import { Calendar, Clock, User, CheckCircle, XCircle, AlertCircle } from 'lucide-react'



const initialAppointments = [
  { id: '1', patientName: 'John Doe', date: '2023-06-15', time: '10:00 AM', reason: 'Annual check-up', status: 'pending' },
  { id: '2', patientName: 'Jane Smith', date: '2023-06-16', time: '2:30 PM', reason: 'Follow-up appointment', status: 'accepted' },
  { id: '3', patientName: 'Alice Johnson', date: '2023-06-17', time: '11:00 AM', reason: 'Consultation', status: 'pending' },
]

export default function AppointmentManagement() {
  const [appointments, setAppointments] = useState(initialAppointments)

  const handleAccept = (id) => {
    setAppointments(prevAppointments =>
      prevAppointments.map(appointment =>
        appointment.id === id ? { ...appointment, status: 'accepted' } : appointment
      )
    )
  }

  const handleReschedule = (id) => {
    // In a real application, this would open a modal or form to reschedule
    const newDate = prompt('Enter new date (YYYY-MM-DD):')
    const newTime = prompt('Enter new time:')
    
    if (newDate && newTime) {
      setAppointments(prevAppointments =>
        prevAppointments.map(appointment =>
          appointment.id === id
            ? { ...appointment, date: newDate, time: newTime, status: 'rescheduled' }
            : appointment
        )
      )
      alert('Notification sent to patient for rescheduling.')
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle className="text-green-500" />
      case 'rescheduled':
        return <AlertCircle className="text-yellow-500" />
      default:
        return <Clock className="text-blue-500" />
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Appointment Management</h2>
      <div className="space-y-4">
        {appointments.map(appointment => (
          <div key={appointment.id} className="border rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {getStatusIcon(appointment.status)}
              <div>
                <p className="font-semibold">{appointment.patientName}</p>
                <p className="text-sm text-gray-600">
                  <Calendar className="inline-block mr-1" size={14} />
                  {appointment.date} at {appointment.time}
                </p>
                <p className="text-sm text-gray-600">{appointment.reason}</p>
              </div>
            </div>
            <div className="space-x-2">
              {appointment.status === 'pending' && (
                <>
                  <button
                    onClick={() => handleAccept(appointment.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-300"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReschedule(appointment.id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition duration-300"
                  >
                    Reschedule
                  </button>
                </>
              )}
              {appointment.status === 'accepted' && (
                <span className="text-green-500 font-semibold">Accepted</span>
              )}
              {appointment.status === 'rescheduled' && (
                <span className="text-yellow-500 font-semibold">Rescheduled</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}