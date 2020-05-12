import axios from 'axios'

const baseURL = 'https://superheroapi.com/api.php/10221961036765944/'

const Axios = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default Axios
