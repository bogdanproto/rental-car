import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { AppContainer, PageContent } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <AppContainer>
      <Header />
      <PageContent>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </PageContent>
    </AppContainer>
  );
};
