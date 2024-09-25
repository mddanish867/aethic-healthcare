import PatientProfile from '../Patient Management/PatientProfile'
import AppointmentScheduling from '..//Patient Management/AppointmentScheduling'
import MedicalHistory from '../Patient Management/MedicalHistory'

export default function PatientDashboard() {
  return (
    <div className="container mx-auto py-8 ">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">Patient Dashboard</h1>
      <div className="space-y-8">
        <PatientProfile />
        <AppointmentScheduling />
        <MedicalHistory />
      </div>
    </div>
  )
}