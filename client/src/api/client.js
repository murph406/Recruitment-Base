import axios from 'axios'
import { BASE } from './api';

const GET_CLIENT = BASE + '/client/get';
const LOGIN = BASE + '/client/login';

const CLIENT_ID = '603f1e5031e7eb1ebb1ccf22'

export function getClient(callback) {
   return axios.get(GET_CLIENT + CLIENT_ID) 
}


export function login(password) {
   const sender = {
      _id: CLIENT_ID,
      password: password
   }

   return axios.post(LOGIN, sender)
}