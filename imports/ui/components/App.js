import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components 

import Home from '../pages/Home/index';
import Dashboard from '../pages/Dashboard';
import Form from './Form';

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => <Home signIn={true}/>}  />
                <Route path="/signup" render={() => <Home signIn={false}/>} />
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/addStudents" render={() => <Form addStudents={true}/>} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;