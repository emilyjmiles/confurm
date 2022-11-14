import PropTypes from 'prop-types';

import './Reminders.css';

const Reminders = ({ patients, appointments }) => {
  // const getReminders = patients.map(patient => {
  //   return (
  //     <div key={ patient.id }>
  //       <p>{ patient.name }</p>
  //     </div>
  //   );
  // });

  const getAppts = appointments.map(appt => {
    return (
      <div key={ appt.id }>
        <p>Status: { appt.status }</p>
        <p>Pet's Name: { appt.patientName }</p>
        <p>Reason: { appt.requestReason }</p>
        { appointments.length > 1 && <hr></hr> }
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
        {/* { getReminders } */ }
      </div>
    </section>
  );
};

export default Reminders;

Reminders.propTypes = {
  patients: PropTypes.array,
  appointments: PropTypes.array.isRequired
};