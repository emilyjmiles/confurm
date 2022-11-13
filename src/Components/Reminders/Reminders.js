import './Reminders.css';

const Reminders = ({ patients }) => {
  const getReminders = patients.map(patient => {
    return (
      <div key={ patient.id }>
        <p>{ patient.name }</p>
      </div>
    );
  });

  return (
    <section className='reminders-section'>
      <div className='overlay'>
        <h1>Important Reminders:</h1>
        { getReminders }
      </div>
    </section>
  );
};

export default Reminders;