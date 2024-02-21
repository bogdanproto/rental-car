import { Suspense } from 'react';
import { Outlet } from 'react-router';

export const SharedLayout = () => {
  return (
    <>
      <h1>Header</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
