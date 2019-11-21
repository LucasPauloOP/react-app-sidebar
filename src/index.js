import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Layout from './pages/Layout';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Login from './pages/Login';

ReactDOM.render(
  <BrowserRouter>
      <Layout />
      <Route exact path="/login" component={Login} />
  </BrowserRouter>,
    document.getElementById('root')
  )
serviceWorker.unregister();



