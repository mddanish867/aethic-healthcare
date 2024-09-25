import {Link, useParams } from 'react-router-dom'
import { Calendar, Video, Pill, Stethoscope, Microscope, Syringe, Thermometer, Activity, Heart, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react'

// Dummy data for services
const servicesData = {
  'appointment-booking': {
    id: 'appointment-booking',
    title: 'Appointment Booking',
    description: 'Schedule your visit with our experienced doctors quickly and easily.',
    icon: Calendar,
    benefits: [
      'Convenient online booking system',
      'Choose your preferred doctor and time slot',
      'Automatic reminders for your appointments',
      'Easy rescheduling and cancellation options'
    ],
    process: [
      'Select a doctor or specialty',
      'Choose an available date and time',
      'Fill in your personal details',
      'Confirm your appointment'
    ],
    faqs: [
      {
        question: 'How far in advance can I book an appointment?',
        answer: 'You can book appointments up to 3 months in advance, depending on the doctor\'s availability.'
      },
      {
        question: 'Can I book an appointment for someone else?',
        answer: 'Yes, you can book appointments for family members or dependents. Just make sure to provide their correct information during booking.'
      }
    ]
  },
  'online-consultation': {
    id: 'online-consultation',
    title: 'Online Consultation',
    description: 'Get expert medical advice from the comfort of your home through video consultations.',
    icon: Video,
    benefits: [
      'Convenient access to healthcare from anywhere',
      'Reduced risk of exposure to illnesses',
      'Save time and travel costs',
      'Access to specialists who might not be locally available'
    ],
    process: [
      'Book an online consultation slot',
      'Receive a confirmation with a video link',
      'Join the video call at the scheduled time',
      'Consult with the doctor and receive advice or prescriptions'
    ],
    faqs: [
      {
        question: 'What technology do I need for an online consultation?',
        answer: 'You need a device (computer, tablet, or smartphone) with a camera and microphone, and a stable internet connection.'
      },
      {
        question: 'Are online consultations secure and private?',
        answer: 'Yes, we use encrypted video technology to ensure your consultation is private and secure.'
      }
    ]
  },
  'medicine-distribution': {
    id: 'medicine-distribution',
    title: 'Medicine Distribution',
    description: 'Get your prescribed medications delivered to your doorstep.',
    icon: Pill,
    benefits: [
      'Convenient home delivery of medications',
      'Ensures you never run out of important prescriptions',
      'Option for automatic refills',
      'Pharmacist consultation available for medication queries'
    ],
    process: [
      'Upload your prescription or select from your existing prescriptions',
      'Our pharmacist verifies the prescription',
      'Payment is processed',
      'Medication is prepared and delivered to your address'
    ],
    faqs: [
      {
        question: 'How long does delivery take?',
        answer: 'Standard delivery takes 1-3 business days. We also offer express delivery options for urgent medications.'
      },
      {
        question: 'Can I get medications without a prescription?',
        answer: 'We can only dispense prescription medications with a valid prescription from a licensed healthcare provider.'
      }
    ]
  },
  'general-checkup': {
    id: 'general-checkup',
    title: 'General Check-up',
    description: 'Comprehensive health check-ups for overall well-being.',
    icon: Stethoscope,
    benefits: [
      'Early detection of potential health issues',
      'Personalized health advice',
      'Comprehensive understanding of your current health status',
      'Peace of mind about your health'
    ],
    process: [
      'Schedule a general check-up appointment',
      'Complete a health questionnaire',
      'Undergo various tests and examinations',
      'Receive a detailed report and consult with a doctor'
    ],
    faqs: [
      {
        question: 'How often should I get a general check-up?',
        answer: 'For most adults, an annual check-up is recommended. However, this can vary based on age, health status, and risk factors.'
      },
      {
        question: 'What does a general check-up include?',
        answer: 'A typical check-up includes vital signs measurement, physical examination, blood tests, and other screenings based on your age and risk factors.'
      }
    ]
  },
  'lab-services': {
    id: 'lab-services',
    title: 'Laboratory Services',
    description: 'State-of-the-art lab tests and diagnostics for accurate health assessments.',
    icon: Microscope,
    benefits: [
      'Wide range of diagnostic tests available',
      'Quick and accurate results',
      'Home sample collection for most tests',
      'Online access to test results'
    ],
    process: [
      'Book a lab test online or through your doctor',
      'Prepare for the test (fasting, etc.) if required',
      'Visit the lab or have a technician collect your sample at home',
      'Receive your results online or collect them from the lab'
    ],
    faqs: [
      {
        question: 'How long does it take to get test results?',
        answer: 'The turnaround time varies depending on the test. Most routine tests are available within 24-48 hours.'
      },
      {
        question: 'Do I need a doctor\'s prescription for all lab tests?',
        answer: 'While many tests require a prescription, some health check-up packages and basic tests can be booked without a prescription.'
      }
    ]
  },
  'vaccination': {
    id: 'vaccination',
    title: 'Vaccination',
    description: 'Immunization services for all age groups.',
    icon: Syringe,
    benefits: [
      'Protection against various infectious diseases',
      'Contribute to community immunity',
      'Up-to-date vaccination records',
      'Expert advice on recommended vaccines'
    ],
    process: [
      'Consult with a doctor about recommended vaccines',
      'Schedule a vaccination appointment',
      'Receive the vaccine from a trained healthcare professional',
      'Get post-vaccination care instructions'
    ],
    faqs: [
      {
        question: 'Are vaccines safe?',
        answer: 'Yes, vaccines are thoroughly tested for safety and efficacy before being approved for use. The benefits of vaccination far outweigh the risks for most people.'
      },
      {
        question: 'Can I get multiple vaccines at once?',
        answer: 'In many cases, yes. Your healthcare provider will advise on the appropriate vaccination schedule based on your age and health status.'
      }
    ]
  },
  'fever-clinic': {
    id: 'fever-clinic',
    title: 'Fever Clinic',
    description: 'Specialized care for patients with fever and related symptoms.',
    icon: Thermometer,
    benefits: [
      'Rapid assessment and treatment of fever',
      'Isolation from other patients to prevent spread of infections',
      'Specialized staff trained in managing febrile illnesses',
      'Quick access to necessary diagnostic tests'
    ],
    process: [
      'Visit the fever clinic or book an appointment',
      'Undergo initial assessment and temperature check',
      'Consult with a doctor specializing in infectious diseases',
      'Receive treatment plan or further testing as needed'
    ],
    faqs: [
      {
        question: 'When should I visit the fever clinic?',
        answer: 'You should visit if you have a high fever (above 101°F or 38.3°C), especially if accompanied by other symptoms like cough, sore throat, or body aches.'
      },
      {
        question: 'Is the fever clinic open 24/7?',
        answer: 'Our fever clinic operates extended hours, including weekends. Please check our website or call for current operating hours.'
      }
    ]
  },
  'emergency-care': {
    id: 'emergency-care',
    title: 'Emergency Care',
    description: '24/7 emergency medical services for immediate medical attention.',
    icon: Activity,
    benefits: [
      'Round-the-clock availability',
      'Rapid response times',
      'Highly trained emergency medical staff',
      'State-of-the-art emergency equipment'
    ],
    process: [
      'Call our emergency hotline or visit the emergency department',
      'Triage by medical staff to assess urgency',
      'Immediate treatment for life-threatening conditions',
      'Stabilization and further care or discharge as appropriate'
    ],
    faqs: [
      {
        question: 'What situations are considered medical emergencies?',
        answer: 'Medical emergencies include severe chest pain, difficulty breathing, severe bleeding, loss of consciousness, and severe injuries, among others.'
      },
      {
        question: 'Can I call an ambulance through your service?',
        answer: 'Yes, our emergency hotline can dispatch an ambulance to your location if needed.'
      }
    ]
  },
  'cardiology': {
    id: 'cardiology',
    title: 'Cardiology',
    description: 'Expert care for heart-related conditions.',
    icon: Heart,
    benefits: [
      'Comprehensive cardiac health assessment',
      'Advanced diagnostic tools and procedures',
      'Personalized treatment plans',
      'Ongoing management of chronic heart conditions'
    ],
    process: [
      'Initial consultation with a cardiologist',
      'Undergo necessary diagnostic tests (ECG, echocardiogram, stress test, etc.)',
      'Receive diagnosis and treatment plan',
      'Follow-up appointments and ongoing care as needed'
    ],
    faqs: [
      {
        question: 'What symptoms suggest I should see a cardiologist?',
        answer: 'You should consider seeing a cardiologist if you experience chest pain, shortness of breath, irregular heartbeats, or have risk factors like high blood pressure or a family history of heart disease.'
      },
      {
        question: 'How can I prepare for my cardiology appointment?',
        answer: 'Bring a list of your current medications, any previous test results, and a detailed description of your symptoms. It is also helpful to write down any questions you have for the doctor.'
      }
    ]
  }
}

export default function ServiceDetails() {
  
  const { id } = useParams();

  const service = servicesData[id]

  if (!service) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Service Not Found</h1>
          <p className="text-center">
            The service you're looking for doesn't exist. Please check the URL and try again.
          </p>
          <div className="text-center mt-8">
            <Link href="/services" className="text-blue-600 hover:underline">
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">{service.title}</h1>
        
        <div className="bg-blue-100 p-6 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <service.icon className="h-8 w-8 text-blue-600 mr-2" />
            <p className="text-xl font-semibold">{service.description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Benefits</h2>
            <ul className="space-y-2">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Process</h2>
            <ol className="list-decimal list-inside space-y-2">
              {service.process.map((step, index) => (
                <li key={index} className="text-gray-700">{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-500 mr-2" />
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link 
            href={service.id === 'appointment-booking' ? '/appointment' : '/contact'}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            {service.id === 'appointment-booking' ? 'Book an Appointment' : 'Contact Us for More Information'}
          </Link>
        </div>
      </div>
    </div>
  )
}