const checkResponse = (res) => {
  if (!res.ok) {
    throw new Error(
      `Status: ${res.status} StatusText: ${res.status.text}`
    );
  }
  return res.json();
};

const fetchUsers = () => {
  return fetch('https://confurm-api.herokuapp.com/api/v1/users')
    .then(response => checkResponse(response));
};

const fetchPatients = () => {
  return fetch('https://confurm-api.herokuapp.com/api/v1/patients')
    .then(response => checkResponse(response));
};

const fetchApptRequests = () => {
  return fetch('https://confurm-api.herokuapp.com/api/v1/apptRequests')
    .then(response => checkResponse(response));
};

const postApptRequest = (bodyData) => {
  return fetch('https://confurm-api.herokuapp.com/api/v1/appointments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
  })
    .then(response => checkResponse(response));
};


export { fetchUsers, fetchPatients, fetchApptRequests, postApptRequest };