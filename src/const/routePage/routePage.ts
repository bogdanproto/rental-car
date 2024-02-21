interface IRoutes {
  BASE: string;
  CATALOG: string;
  FAVORITES: string;
}

export const routePage: IRoutes = Object.freeze({
  BASE: '/',
  CATALOG: '/catalog',
  FAVORITES: '/favorites',
});
