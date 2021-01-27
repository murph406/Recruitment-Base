import axios from 'axios'
import { BASE } from './api';

const GET_CLIENT = BASE + '/client';

export function getClient(callback) {
   return axios.get(GET_CLIENT)
    // .then((data) => callback(data.data))
    // .catch((e) => callback(e))
}