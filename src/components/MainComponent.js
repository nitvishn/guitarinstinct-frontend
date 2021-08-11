import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import QuizComponent from './QuizComponent';

class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Switch>
                <Route path="/">
                    <QuizComponent></QuizComponent>
                </Route>
            </Switch>
        )
    }
}

export default Main;