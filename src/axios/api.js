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
  addProduct: product => {
    return axios.post('/products', product);
  },
  addDrug: drug => {
    return axios.post('/drugs', drug);
  },
  addPackage: packageType => {
    return axios.post('/packages', packageType);
  },
};
