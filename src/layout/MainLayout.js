import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "../components/header";
import Footer from "../components/footer";

import Home from "./../views/home"
import Rooms from "../views/rooms";

export default function MainLayout() {
    return (<Router basename={''}>
        <Header/>
        <Switch>
            <Route exact path={'/rooms'} component={Rooms} />
            <Route path={'/'} component={Home} />
        </Switch>
        <Footer/>
    </Router>)
}