import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

export const MasterDataLayout = () => {
  return (
    <Fragment>
      <div className="tabs w-full bg-primary h-12 sticky top-0 z-50">
        <a className="tab  text-white">Tab 1</a>
        <a className="tab tab-bordered tab-active text-white !border-b-white">Tab 2</a>
        <a className="tab  text-white">Tab 3</a>
      </div>
      <div className="min-h-[92dvh]">
        <Outlet />
      </div>
    </Fragment>
  );
};
