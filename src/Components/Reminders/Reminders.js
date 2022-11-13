import './Reminders.css';

const Reminders = ({ patients, appointments }) => {
  console.log(appointments);
  const getReminders = patients.map(patient => {
    return (
      <div key={ patient.id }>
        <p>{ patient.name }</p>
      </div>
    );
  });

  const getAppts = appointments.map(appt => {
    return (
      <div key={ appt.id }>
        <p>Status: { appt.status }</p>
        <p>Pet's Name: { appt.patientName }</p>
        <p>Reason: { appt.requestReason }</p>
      </div>
    );
  });

  return (
    <section className='reminders-section'>
      <div className='overlay'>
        <h1>Important Reminders:</h1>
        <h2>Appointments:</h2>
        { !appointments.length && <p>You have no upcoming appointments</p> }
        { appointments.length > 0 && getAppts }
        { getReminders }
      </div>
    </section>
  );
};

export default Reminders;