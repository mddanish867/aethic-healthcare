import React, { useState } from 'react'
import { User, FileText, Clipboard, Plus } from 'lucide-react'



const initialPatient = {
  id: '12345',
  name: 'John Doe',
  age: 35,
  gender: 'Male',
  contactNumber: '+1 (555) 123-4567',
  medicalHistory: [
    'Hypertension diagnosed in 2018',
    'Appendectomy in 2015',
    'Allergic to penicillin'
  ],
  treatments: [
    { date: '2023-05-15', description: 'Prescribed lisinopril for hypertension' },
    { date: '2023-03-10', description: 'Annual physical examination - all clear' }
  ]
}

export default function PatientInteraction() {
  const [patient, setPatient] = useState<Patient>(initialPatient)
  const [newTreatment, setNewTreatment] = useState({ date: '', description: '' })

  const handleAddTreatment = (e) => {
    e.preventDefault()
    if (newTreatment.date && newTreatment.description) {
      setPatient(prev => ({
        ...prev,
        treatments: [...prev.treatments, newTreatment]
      }))
      setNewTreatment({ date: '', description: '' })
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Patient Interaction</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Patient Details</h3>
          <div className="space-y-2">
            <p><User className="inline-block mr-2" size={18} /> {patient.name}</p>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            <p>Contact: {patient.contactNumber}</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Medical History</h3>
          <ul className="list-disc list-inside space-y-1">
            {patient.medicalHistory.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Treatment History</h3>
        <div className="space-y-2">
          {patient.treatments.map((treatment, index) => (
            <div key={index} className="flex items-start space-x-2 border-b pb-2">
              <Clipboard className="flex-shrink-0 mt-1" size={18} />
              <div>
                <p className="font-medium">{treatment.date}</p>
                <p>{treatment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Add New Treatment</h3>
        <form onSubmit={handleAddTreatment} className="space-y-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              id="date"
              value={newTreatment.date}
              onChange={(e) => setNewTreatment(prev => ({ ...prev, date: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              id="description"
              value={newTreatment.description}
              onChange={(e) => setNewTreatment(prev => ({ ...prev, description: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              rows={3}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus size={18} className="mr-2" />
            Add Treatment
          </button>
        </form>
      </div>
    </div>
  )
}