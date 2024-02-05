import axios from 'axios';
import { BASE_URL } from '@/utils/variables';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export const httpService = {
  getData: () => instance.get(`/data/`),
  getDataById: (id) => instance.get(`/data/${id}`),
  getDataByFilter: (memberConfig) => instance.get(`/data/`, { params: { ...memberConfig } }),
  getDataByPage: ([page, limit]) => instance.get('/data/', { params: { _page: page, _limit: limit } }),
  postData: (data) => instance.post('/data/', data),
  patchData: (id, data) => instance.patch(`/data/${id}`, data),
  putData: (id, data) => instance.put(`/data/${id}`, data),
  deleteData: (id) => instance.delete(`/data/${id}`),
};