import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';

export const Layout = () => {
  return (
    <Fragment>
      <Sidebar />
      <div className="min-h-[92dvh]">
        <Outlet />
      </div>
    </Fragment>
  );
};
