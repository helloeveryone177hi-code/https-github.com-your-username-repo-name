import createContextHook from '@nkzw/create-context-hook';
import { useState, useCallback, useMemo } from 'react';
import { Appointment, Prescription } from '@/types/hospital';

export const [HospitalProvider, useHospital] = createContextHook(() => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [currentSymptoms, setCurrentSymptoms] = useState<string>('');

  const addAppointment = useCallback((appointment: Appointment) => {
    console.log('Adding appointment:', appointment);
    setAppointments(prev => [...prev, appointment]);
  }, []);

  const addPrescription = useCallback((prescription: Prescription) => {
    console.log('Adding prescription:', prescription);
    setPrescriptions(prev => [...prev, prescription]);
  }, []);

  const updateSymptoms = useCallback((symptoms: string) => {
    console.log('Updating symptoms:', symptoms);
    setCurrentSymptoms(symptoms);
  }, []);

  return useMemo(() => ({
    appointments,
    prescriptions,
    currentSymptoms,
    addAppointment,
    addPrescription,
    updateSymptoms,
  }), [appointments, prescriptions, currentSymptoms, addAppointment, addPrescription, updateSymptoms]);
});
