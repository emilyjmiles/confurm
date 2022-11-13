import { useState } from 'react';
import './RequestForm.css';
import { postApptRequest } from '../../apiCalls';


const RequestForm = () => {
  const [owner, setOwner] = useState('');
  const [pet, setPet] = useState('');
  const [reason, setReason] = useState('');

  const submitRequest = event => {
    event.preventDefault();
    const newRequest = {
      id: Date.now(),
      userName: owner,
      patientNme: pet,
      requestReason: reason,
      status: 'pending'
    };
    postApptRequest(newRequest);
    clearInputs();
  };

  const clearInputs = () => {
    setOwner('');
    setPet('');
    setReason('');
  };

  return (
    <section>
      <form>
        <input
          type='text'
          placeholder="owner's first and last name"
          value={ owner }
          onChange={ (event) => setOwner(event.target.value) }
        />
        <input
          type='text'
          placeholder="pet's name"
          value={ pet }
          onChange={ (event) => setPet(event.target.value) }
        />
        <input
          type='text'
          placeholder='reason for appointment'
          value={ reason }
          onChange={ (event) => setReason(event.target.value) }
        />
        <button onClick={ (event) => submitRequest(event) }>Submit Request</button>
      </form>
    </section>
  );
};

export default RequestForm;