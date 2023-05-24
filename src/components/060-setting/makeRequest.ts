import axios from 'axios';

export const makeRequest = axios.create({
  baseURL: 'https://atlasapi.optimizecare.com/api/v2/setting',
});
