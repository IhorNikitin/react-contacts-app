import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainPage, NotFound } from './components';
import { UserInfo, UserCreate } from './features';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/user/:id" component={UserInfo} />
                <Route exact path="/create" component={UserCreate} />
                <Route exact path="/edit/:id" component={UserCreate} />
                <Route path="*" component={NotFound} />
            </Switch>
        );
    }
}

export default Routes;
