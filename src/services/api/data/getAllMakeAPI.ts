import { routeDataAPI } from 'const';
import { rentCarAPI } from '../axiosConf/axiosConf';

export const getAllMakeAPI = async () => {
  const { data } = await rentCarAPI.get(routeDataAPI.MAKES);
  return data;
};
