export type Specialty = 
  | 'Cardiology'
  | 'Dermatology'
  | 'Neurology'
  | 'Orthopedics'
  | 'Pediatrics'
  | 'Psychiatry'
  | 'General Medicine'
  | 'ENT'
  | 'Ophthalmology'
  | 'Gynecology';

export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface Doctor {
  id: string;
  name: string;
  specialty: Specialty;
  qualification: string;
  experience: number;
  rating: number;
  image: string;
  location: string;
  workingDays: DayOfWeek[];
  timing: string;
  consultationFee: number;
  available: boolean;
}

export interface Symptom {
  id: string;
  name: string;
  category: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  date: string;
  time: string;
  symptoms: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface Prescription {
  id: string;
  appointmentId: string;
  doctorId: string;
  patientName: string;
  date: string;
  diagnosis: string;
  medications: Medication[];
  instructions: string;
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
}
