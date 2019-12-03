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
  editProduct: (id, product) => {
    return axios.put(`/products/${id}`, product);
  },
  editDrug: (id, drug) => {
    return axios.put(`/drugs/${id}`, drug);
  },
  editPackage: (id, packageType) => {
    return axios.put(`/packages/${id}`, packageType);
  },
  deleteProduct: id => {
    return axios.delete(`/products/${id}`);
  },
  deleteDrug: id => {
    return axios.delete(`/drugs/${id}`);
  },
  deletePackage: id => {
    return axios.delete(`/packages/${id}`);
  },
};
