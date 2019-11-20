import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Layout from './pages/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Port1 from './pages/Layout/port1';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
             <Route exact={true} path='/' component={Layout}/>
             <Route exact={true} path='/porta1' component={Port1} />        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
  )
serviceWorker.unregister();



