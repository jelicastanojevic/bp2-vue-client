import axios from '@/axios/axios.js';

export const api = {
  getAllProducts: () => {
    return axios.get('/products');
  },
  getAllDrugs: () => {
    return axios.get('/drugs');
  },
  getAllTypesOfPackages: () => {
    return axios.get('/packages');
  },
};
