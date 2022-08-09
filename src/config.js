const api_host =  "http://localhost:3000"

const authHeader = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return { Authorization: 'Bearer ' + user};
  } else {
    return {};
  }
}

export default {
  api_host,
  authHeader
}