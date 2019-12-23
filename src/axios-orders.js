import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder123.firebaseio.com/'
});

export default instance;
