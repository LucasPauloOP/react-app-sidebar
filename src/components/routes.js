import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Port1 from '../pages/Layout/port1';
import Port2 from '../pages/Layout/port2';
import Port3 from '../pages/Layout/port3';
import Login from '../pages/Login';
import styled from 'styled-components';

//css
const Main = styled.main`
margin-top: 10%;
margin-left:2%
text-align:justify;
`

//component
const Routes = () => {
    return(
        <Main>
            <Switch>
                {/* <Route exact path='/' component={Layout}/> */}
                {/* <Route exact path='/login' component={Login}/> */}
                <Route exact path='/porta1' component={Port1} />
                <Route exact path='/porta2' component={Port2} />    
                <Route exact path='/porta3' component={Port3} />            
            </Switch>
      </Main> 
    )
}

export default Routes;