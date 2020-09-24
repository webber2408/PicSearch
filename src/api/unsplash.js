import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    'Authorization': 'Client-ID S6HEbnC6NpPFtQQ_asDGcFuZVftORwgv8opuOStL47w'
  }
});
