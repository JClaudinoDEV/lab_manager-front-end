import React from 'react';
import Home from '../pages/home';
import Reserva from '../pages/Reserva';
import { isAuthenticated } from '../pages/auth';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props =>(
        isAuthenticated() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location} }}/>
        )
    )} 
    />
)


const Routes =  () => (
    <BrowserRouter>
        <Switch>
            <Route component= {Home} exact path = "/"/>
            <PrivateRoute component={<Reserva/>} path="/reserva" />
        </Switch>
    </BrowserRouter>
);

export default Routes;