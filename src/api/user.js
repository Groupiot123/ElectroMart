import axios from './axiosConfig';

export const getUserDetails = async (userId) => {
  return axios.get(`/users/${userId}`);
};

export const updateUser = async (userId, data) => {
  return axios.put(`/users/${userId}`, data);
};
