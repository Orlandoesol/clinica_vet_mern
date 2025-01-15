import axios from './axios.js';

export const getClientsRequest = async () => axios.get('/getClientes');