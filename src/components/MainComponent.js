import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import OuterQuizComponent from './OuterQuizComponent';
import HomeComponent from './HomeComponent';
import { GuitarNote } from '../helpers/musicEngine';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route path="/">
                    <HomeComponent></HomeComponent>
                </Route>
                <Route path="/quiz">
                    <OuterQuizComponent></OuterQuizComponent>
                </Route>
            </Switch>
        )
    }
}

export default Main;