import { IParams } from 'interfaces';

export const setSearchParams = async (params: IParams) => {
  const urlParams = new URLSearchParams(window.location.search);

  const { page } = Object.fromEntries(urlParams);

  console.log(page);

  if (!page) {
    urlParams.set('page', params.page.toString());
    urlParams.set('limit', '12');
  }

  urlParams.toString();
  const updatedUrl = `${window.location.pathname}?${urlParams}`;
  window.history.replaceState({}, '', updatedUrl);
};
