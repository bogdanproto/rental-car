import { routeDataAPI } from 'const';
import { rentCarAPI } from '../axiosConf/axiosConf';
import { IParams } from 'interfaces';

export const getAllAdvertsAPI = async ({ page, limit = 12 }: IParams) => {
  const params = { page, limit };

  const { data } = await rentCarAPI.get(routeDataAPI.ADVERTS, { params });

  return data;
};
