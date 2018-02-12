const token = localStorage.getItem('token')
const headers = () => {
  return {
    Content-Type: 'application/json',
    Accepts: 'application/json',
    Authorization: localStorage.getItem('token')
  }
}

const URL_ROOT = 'http://localhost:3001'
const API_ROOT = `${URL_ROOT}/api/v1`

const getCryptos = () => {
  return fetch(`${API_ROOT}/cryptos`, {
    headers: headers()
  }).then(res => res.json());
}

const login = (username, password) => {
  return fetch(`${URL_ROOT}/login`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
}

const getLoggedInUser = () => {
  return fetch(`${URL_ROOT}/current_user`, {
    headers: headers()
  }).then(res => res.json())
}

export default {
  cryptos: {
    getCryptos
  },
  auth: {
    login,
    getLoggedInUser
  }
}
