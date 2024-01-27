import React, { useState } from 'react';

import "./Main.css";

import Header from './components/Header';
import Menu from './components/Menu';
import Content from './layouts/Content';

import { AccountContextProvider } from './contexts/AccountContext';

function Main() {
  return (
      <div className="Main">
        <AccountContextProvider>
          <Header />
          <Menu />
          <Content />
        </AccountContextProvider>
      </div>
  );
}

export default Main;
