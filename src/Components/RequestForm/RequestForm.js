import { useState } from 'react';

import { postApptRequest } from '../../apiCalls';

import './RequestForm.css';

const RequestForm = () => {
  const [ownerFirst, setOwnerFirst] = useState('');
  const [ownerLast, setOwnerLast] = useState('');
  const [pet, setPet] = useState('');
  const [reason, setReason] = useState('');
  const [inputStatus, setInputStatus] = useState();
  const [submitStatus, setSubmitStatus] = useState(false);

  const submitRequest = event => {
    event.preventDefault();
    checkInputs();
    if (inputStatus === true && submitStatus === false) {
      const newRequest = {
        id: Date.now(),
        userName: `${ownerFirst} ${ownerLast}`,
        patientName: pet,
        requestReason: reason,
        status: 'pending'
      };
      postApptRequest(newRequest);
      clearInputs();
    }
  };

  const clearInputs = () => {
    setOwnerFirst('');
    setOwnerLast('');
    setPet('');
    setReason('');
    setInputStatus();
    setSubmitStatus(true);

  };

  const checkInputs = () => {
    if (ownerFirst === '' || ownerLast === '' || pet === '' || reason === '') {
      setInputStatus(false);
    }
    if (ownerFirst !== '' && ownerLast !== '' && pet !== '' && reason !== '') {
      setInputStatus(true);
    }
  };

  return (
    <section className='form-container'>
      <div className='form-section'>
        <form>
          <label>Owner's Name:
            <input
              type='text'
              placeholder="first name"
              value={ ownerFirst }
              onChange={ (event) => setOwnerFirst(event.target.value) }
            />
            <input
              type='text'
              placeholder="last name"
              value={ ownerLast }
              onChange={ (event) => setOwnerLast(event.target.value) }
            />
          </label>
          <label>Pet's Name:
            <input
              type='text'
              placeholder="pet's name"
              value={ pet }
              onChange={ (event) => setPet(event.target.value) }
            />
          </label>
          <label>Reason for Appointment:</label>
          <textarea
            type='text'
            placeholder='reason for appointment'
            value={ reason }
            maxLength='250'
            onChange={ (event) => setReason(event.target.value) }
          />
          <button onClick={ (event) => {
            submitRequest(event);
          } }>Submit Request</button>
          { inputStatus === false && <p>Please fill out all required fields before submitting</p> }
          { inputStatus === true && <p>Please verify all information before submitting your request</p> }
          { submitStatus && <p>Your request has been submitted</p> }
        </form>
      </div>
    </section>
  );
};

export default RequestForm;