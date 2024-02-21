import axios from 'axios';
import { routeAPI } from 'const/routeAPI/baseRoute';

export const rentCarAPI = axios.create({
  baseURL: routeAPI.BACKEND,
});
