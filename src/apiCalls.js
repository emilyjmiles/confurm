const checkResponse = (res) => {
  if (!res.okay) {
    throw new Error(
      `Status: ${response.status} StatusText: ${response.status.text}`
    );
  }
  return res.json();
};

const fetchUsers = () => {
  return fetch('https://confurm-api.herokuapp.com/api/v1/users')
    .then(response => checkResponse(response));
};

export default { fetchUsers };