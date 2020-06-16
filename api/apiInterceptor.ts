import axios from 'axios';
import {API_HOST_BASE_URL as BASE_URL} from 'react-native-dotenv';

const hnm = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
    'x-rapidapi-key': '21f704eb37mshfb58622005ec373p1b9b41jsne48f1c37816d',
  },
});

export default hnm;
