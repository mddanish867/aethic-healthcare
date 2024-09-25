// import React, { useState } from 'react'
// import { FileText, Pill, Flask, Plus, Download, Eye } from 'lucide-react'






// const initialMedicalRecords = [
//   { id: '1', date: '2023-05-15', description: 'Annual physical examination', doctor: 'Dr. Smith' },
//   { id: '2', date: '2023-03-10', description: 'Follow-up for hypertension', doctor: 'Dr. Johnson' },
// ]

// const initialPrescriptions = [
//   { id: '1', date: '2023-05-15', medication: 'Lisinopril', dosage: '10mg', instructions: 'Take once daily' },
//   { id: '2', date: '2023-03-10', medication: 'Metformin', dosage: '500mg', instructions: 'Take twice daily with meals' },
// ]

// const initialLabResults= [
//   { id: '1', date: '2023-05-15', testName: 'Complete Blood Count', result: 'Normal', attachmentUrl: '/sample-cbc-result.pdf' },
//   { id: '2', date: '2023-03-10', testName: 'Lipid Panel', result: 'Elevated LDL', attachmentUrl: '/sample-lipid-panel.pdf' },
// ]

// export default function ElectronicHealthRecords() {
//   const [medicalRecords, setMedicalRecords] = useState(initialMedicalRecords)
//   const [prescriptions, setPrescriptions] = useState(initialPrescriptions)
//   const [labResults, setLabResults] = useState(initialLabResults)
  
//   const [newMedicalRecord, setNewMedicalRecord] = useState({ date: '', description: '', doctor: '' })
//   const [newPrescription, setNewPrescription] = useState({ date: '', medication: '', dosage: '', instructions: '' })
//   const [newLabResult, setNewLabResult] = useState({ date: '', testName: '', result: '', attachmentUrl: '' })

//   const handleAddMedicalRecord = (e) => {
//     e.preventDefault()
//     const id = Math.random().toString(36).substr(2, 9)
//     setMedicalRecords(prev => [...prev, { id, ...newMedicalRecord }])
//     setNewMedicalRecord({ date: '', description: '', doctor: '' })
//   }

//   const handleAddPrescription = (e) => {
//     e.preventDefault()
//     const id = Math.random().toString(36).substr(2, 9)
//     setPrescriptions(prev => [...prev, { id, ...newPrescription }])
//     setNewPrescription({ date: '', medication: '', dosage: '', instructions: '' })
//   }

//   const handleAddLabResult = (e) => {
//     e.preventDefault()
//     const id = Math.random().toString(36).substr(2, 9)
//     setLabResults(prev => [...prev, { id, ...newLabResult }])
//     setNewLabResult({ date: '', testName: '', result: '', attachmentUrl: '' })
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-6">Electronic Health Records</h2>
      
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-2 flex items-center">
//           <FileText className="mr-2" />
//           Medical Records
//         </h3>
//         <div className="space-y-2 mb-4">
//           {medicalRecords.map(record => (
//             <div key={record.id} className="flex items-center justify-between border-b pb-2">
//               <div>
//                 <p className="font-medium">{record.date}</p>
//                 <p className="text-sm text-gray-600">{record.description}</p>
//               </div>
//               <p className="text-sm text-gray-600">{record.doctor}</p>
//             </div>
//           ))}
//         </div>
//         <form onSubmit={handleAddMedicalRecord} className="space-y-2">
//           <input
//             type="date"
//             value={newMedicalRecord.date}
//             onChange={(e) => setNewMedicalRecord(prev => ({ ...prev, date: e.target.value }))}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             required
//           />
//           <input
//             type="text"
//             value={newMedicalRecord.description}
//             onChange={(e) => setNewMedicalRecord(prev => ({ ...prev, description: e.target.value }))}
//             placeholder="Description"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             required
//           />
//           <input
//             type="text"
//             value={newMedicalRecord.doctor}
//             onChange={(e) => setNewMedicalRecord(prev => ({ ...prev, doctor: e.target.value }))}
//             placeholder="Doctor"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             required
//           />
//           <button
//             type="submit"
//             className="flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             <Plus size={18} className="mr-2" />
//             Add Medical Record
//           </button>
//         </form>
//       </div>
      
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-2 flex items-center">
//           <Pill className="mr-2" />
//           Prescriptions
//         </h3>
//         <div className="space-y-2 mb-4">
//           {prescriptions.map(prescription => (
//             <div key={prescription.id} className="flex items-center justify-between border-b pb-2">
//               <div>
//                 <p className="font-medium">{prescription.date}</p>
//                 <p className="text-sm text-gray-600">{prescription.medication} - {prescription.dosage}</p>
//                 <p className="text-sm text-gray-600">{prescription.instructions}</p>
//               </div>
//               <button className="text-blue-600 hover:text-blue-800">
//                 <Download size={18} />
//               </button>
//             </div>
//           ))}
//         </div>
//         <form onSubmit={handleAddPrescription} className="space-y-2">
//           <input
//             type="date"
//             value={newPrescription.date}
//             onChange={(e) => setNewPrescription(prev => ({ ...prev, date: e.target.value }))}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             required
//           />
//           <input
//             type="text"
//             value={newPrescription.medication}
//             onChange={(e) => setNewPrescription(prev => ({ ...prev, medication: e.target.value }))}
//             placeholder="Medication"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             required
//           />
//           <input
//             type="text"
//             value={newPrescription.dosage}
//             onChange={(e) => setNewPrescription(prev => ({ ...prev, dosage: e.target.value }))}
//             placeholder="Dosage"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             required
//           />
//           <input
//             type="text"
//             value={newPrescription.instructions}
//             onChange={(e) => setNewPrescription(prev => ({ ...prev, instructions: e.target.value }))}
//             placeholder="Instructions"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             required
//           />
//           <button
//             type="submit"
//             className="flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             <Plus size={18} className="mr-2" />
//             Add Prescription
//           </button>
//         </form>
//       </div>
      
//       <div>
//         <h3 className="text-lg font-semibold mb-2 flex items-center">
//           <Flask className="mr-2" />
//           Lab Results
//         </h3>
//         <div className="space-y-2 mb-4">
//           {labResults.map(result => (
//             <div key={result.id} className="flex items-center justify-between border-b pb-2">
//               <div>
//                 <p className="font-medium">{result.date}</p>
//                 <p className="text-sm text-gray-600">{result.testName}</p>
//                 <p className="text-sm text-gray-600">Result: {result.result}</p>
//               </div>
//               <div className="space-x-2">
//                 <button className="text-blue-600 hover:text-blue-800">
//                   <Eye size={18} />
//                 </button>
//                 <button className="text-blue-600 hover:text-blue-800">
//                   <Download size={18} />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <form onSubmit={handleAddLabResult} className="space-y-2">
//           <input
//             type="date"
//             value={newLabResult.date}
//             onChange={(e) => setNewLabResult(prev => ({ ...prev, date: e.target.value }))}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             required
//           />
//           <input
//             type="text"
//             value={newLabResult.testName}
//             onChange={(e) => setNewLabResult(prev => ({ ...prev, testName: e.target.value }))}
//             placeholder="Test Name"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             required
//           />
//           <input
//             type="text"
//             value={newLabResult.result}
//             onChange={(e) => setNewLabResult(prev => ({ ...prev, result: e.target.value }))}
//             placeholder="Result"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             required
//           />
//           <input
//             type="text"
//             value={newLabResult.attachmentUrl}
//             ></input>
//             </form>