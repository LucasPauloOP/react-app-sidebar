import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Layout from './pages/Layout';
import { BrowserRouter } from 'react-router-dom';
// import Routes from './components/routes';

ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
    document.getElementById('root')
  )
serviceWorker.unregister();



