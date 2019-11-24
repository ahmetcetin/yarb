import React from 'react';
import { Classes } from '@blueprintjs/core';
import Topbar from './Topbar.js';

const Layout = ({ children, ...rest }) => {
  return (
    <>
      <Topbar {...rest} />
      <div className={Classes.PANEL_STACK_VIEW}>{children}</div>
    </>
  );
};

export default Layout;
