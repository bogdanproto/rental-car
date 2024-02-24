import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { AppContainer, PageContent } from './SharedLayout.styled';
import { Notify } from 'components/common';

export const SharedLayout = () => {
  return (
    <AppContainer>
      <Notify />
      <Header />
      <PageContent>
        <Suspense>
          <Outlet />
        </Suspense>
      </PageContent>
    </AppContainer>
  );
};
