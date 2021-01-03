import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://muchsin-todo-server.herokuapp.com/'
})

export default Axios
