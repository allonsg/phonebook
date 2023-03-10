import axios from 'axios';
import token from 'common/token';

let secondaryToken = null;

const setToken = data => {
  secondaryToken = data;
};

const $publicHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const $privateHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const authInterceptor = config => {
  config.headers['Authorization'] = secondaryToken || token;
  return config;
};

$privateHost.interceptors.request.use(authInterceptor);

export const signUpRequest = async formData => {
  const { data } = await $publicHost.post('/users/signup', formData);
  setToken(data.token);
  return data;
};

export const loginRequest = async formData => {
  const { data } = await $publicHost.post('/users/login', formData);
  setToken(data.token);
  return data;
};

export const getAuthRequest = async formData => {
  const { data } = await $privateHost.get('/users/current', formData);
  return data;
};

export const logOutRequest = async () => {
  const { data } = await $privateHost.post('/users/logout');
  return data;
};

export const getContactsRequest = async () => {
  const { data } = await $privateHost.get('/contacts');
  return data;
};

export const addContactRequest = async contact => {
  const { data } = await $privateHost.post('/contacts', contact);
  return data;
};

export const deleteContactRequest = async id => {
  const { data } = await $privateHost.delete(`/contacts/${id}`);
  return data;
};

export const editContactRequest = async ({ id, formData: contact }) => {
  const { data } = await $privateHost.patch(`/contacts/${id}`, contact);
  return data;
};
