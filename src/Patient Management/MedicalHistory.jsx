import React, { useState } from 'react'
import { FileText, Plus, Minus, Download } from 'lucide-react'



const initialRecords = [
  { id: '1', date: '2023-05-15', type: 'Diagnosis', description: 'Annual physical examination', doctor: 'Dr. Smith' },
  { id: '2', date: '2023-04-20', type: 'Prescription', description: 'Antibiotic prescription for strep throat', doctor: 'Dr. Johnson' },
  { id: '3', date: '2023-03-10', type: 'Lab Result', description: 'Blood work results', doctor: 'Dr. Williams', attachmentUrl: '/sample-lab-result.pdf' },
]

export default function MedicalHistory() {
  const [records, setRecords] = useState(initialRecords)
  const [expandedRecords, setExpandedRecords] = useState([])

  const toggleRecord = (id) => {
    setExpandedRecords(prev =>
      prev.includes(id) ? prev.filter(recordId => recordId !== id) : [...prev, id]
    )
  }

  const addNewRecord = () => {
    // In a real application, this would open a form to add a new record
    console.log('Add new record')
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900">Medical History & Records</h2>
        <button
          onClick={addNewRecord}
          className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Plus size={18} className="mr-2" />
          Add New Record
        </button>
      </div>

      <div className="space-y-4">
        {records.map(record => (
          <div key={record.id} className="border rounded-md">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleRecord(record.id)}
            >
              <div>
                <p className="font-semibold">{record.type}</p>
                <p className="text-sm text-gray-600">{record.date}</p>
              </div>
              <button className="text-gray-600 hover:text-gray-800">
                {expandedRecords.includes(record.id) ? <Minus size={20} /> : <Plus size={20} />}
              </button>
            </div>
            {expandedRecords.includes(record.id) && (
              <div className="p-4 bg-gray-50 border-t">
                <p><strong>Description:</strong> {record.description}</p>
                <p><strong>Doctor:</strong> {record.doctor}</p>
                {record.attachmentUrl && (
                  <a
                    href={record.attachmentUrl}
                    download
                    className="flex items-center text-blue-600 hover:text-blue-800 mt-2"
                  >
                    <Download size={18} className="mr-2" />
                    Download Attachment
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}