import axios  from 'axios';

// creating an instance of the baseapi

const instance  = axios.create({
  baseURL:'http://api.themoviedb.org/3'
})
export default instance;