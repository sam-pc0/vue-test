import axios from 'axios';

import { users } from './environment';

const getMethod = (route) => {
  return axios.get(route).then((res) => res.data);
};

const postMethod = (route, data) => {
  return axios.post(route, data).then((res) => res.data);
};

export const getUsers = () => getMethod(users);
export const postUser = (data) => postMethod(users, data);
