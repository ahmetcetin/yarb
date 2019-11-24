import React from 'react';
import { FocusStyleManager } from '@blueprintjs/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';
import Layout from './Layout';
import { topMenu } from './menu';
import { languages } from './languages';
import './App.css';

FocusStyleManager.onlyShowFocusOnTabs();

const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout topMenu={topMenu} languages={languages}>
          <Routes />
        </Layout>
      </Router>
    </div>
  );
};

App.displayName = 'App';

export default App;
