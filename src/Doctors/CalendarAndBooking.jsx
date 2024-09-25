import React, { useState } from 'react'
import { Calendar, Clock, User, Bell, Plus } from 'lucide-react'



const initialAppointments = [
  { id: '1', patientName: 'John Doe', date: '2023-06-15', time: '10:00 AM', doctor: 'Dr. Smith' },
  { id: '2', patientName: 'Jane Smith', date: '2023-06-15', time: '2:30 PM', doctor: 'Dr. Johnson' },
  { id: '3', patientName: 'Alice Johnson', date: '2023-06-16', time: '11:00 AM', doctor: 'Dr. Smith' },
]

const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams']

export default function CalendarAndBooking() {
  const [appointments, setAppointments] = useState>(initialAppointments)
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    date: '',
    time: '',
    doctor: ''
  })

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value)
  }

  const handleNewAppointmentChange = (e) => {
    const { name, value } = e.target
    setNewAppointment(prev => ({ ...prev, [name]: value }))
  }

  const handleAddAppointment = (e) => {
    e.preventDefault()
    const id = Math.random().toString(36).substr(2, 9)
    setAppointments(prev => [...prev, { id, ...newAppointment }])
    setNewAppointment({ patientName: '', date: '', time: '', doctor: '' })
    alert('Appointment added successfully. Notification sent to the patient.')
  }

  const filteredAppointments = selectedDate
    ? appointments.filter(appointment => appointment.date === selectedDate)
    : appointments

  const sendReminders = () => {
    // In a real application, this would trigger sending notifications to patients and doctors
    alert('Reminders sent to patients and doctors for upcoming appointments.')
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Calendar and Booking System</h2>
      
      <div className="mb-6">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Appointments</h3>
        <div className="space-y-2">
          {filteredAppointments.map(appointment => (
            <div key={appointment.id} className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-medium">{appointment.patientName}</p>
                <p className="text-sm text-gray-600">{appointment.date} at {appointment.time}</p>
              </div>
              <p className="text-sm text-gray-600">{appointment.doctor}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Book New Appointment</h3>
        <form onSubmit={handleAddAppointment} className="space-y-4">
          <div>
            <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={new

Appointment.patientName}
              onChange={handleNewAppointmentChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              id="appointmentDate"
              name="date"
              value={newAppointment.date}
              onChange={handleNewAppointmentChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <input
              type="time"
              id="appointmentTime"
              name="time"
              value={newAppointment.time}
              onChange={handleNewAppointmentChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">Doctor</label>
            <select
              id="doctor"
              name="doctor"
              value={newAppointment.doctor}
              onChange={handleNewAppointmentChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            >
              <option value="">Select a doctor</option>
              {doctors.map(doctor => (
                <option key={doctor} value={doctor}>{doctor}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus size={18} className="mr-2" />
            Book Appointment
          </button>
        </form>
      </div>
      
      <div>
        <button
          onClick={sendReminders}
          className="flex items-center justify-center w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <Bell size={18} className="mr-2" />
          Send Appointment Reminders
        </button>
      </div>
    </div>
  )
}