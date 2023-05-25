import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 15000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default Axios