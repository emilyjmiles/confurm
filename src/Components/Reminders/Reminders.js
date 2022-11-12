import './Reminders.css';

const Reminders = ({ users }) => {
  console.log(users);

  const getReminders = users.reduce((reminders, user) => {
    user.pets.forEach(pet => {
      console.log(pet.medHx);
      reminders.push(
        <div>
          <p>{ }</p>
          <p>{ }</p>
        </div>
      );

    });

    return reminders;
  }, []);

  return (
    <section className='reminders-section'>
      <div className='overlay'>
        <h1>Important Reminders:</h1>
      </div>
    </section>
  );
};

export default Reminders;