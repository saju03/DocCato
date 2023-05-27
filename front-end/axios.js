import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 15000,
    headers: {'X-Custom-Header': 'true'}
  });

export default Axios