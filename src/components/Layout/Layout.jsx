import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Loader from 'components/Loader/Loader';
import { Navbar } from './Layout.styled';
import { Link } from './Layout.styled';
export const Layout = () => {
  return (
    <div>
      <header>
        <Navbar>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navbar>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
