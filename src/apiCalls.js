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

export { fetchUsers };