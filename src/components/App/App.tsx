import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { routePage } from 'const';
import { NotFound } from 'pages';
import { lazy } from 'react';
import { Route, Routes } from 'react-router';

const Home = lazy(() => import('../../pages/Home/Home'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../../pages/Favorites/Favorites'));

export const App = () => {
  return (
    <Routes>
      <Route path={routePage.BASE} element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path={routePage.CATALOG} element={<Catalog />} />
        <Route path={routePage.FAVORITES} element={<Favorites />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
