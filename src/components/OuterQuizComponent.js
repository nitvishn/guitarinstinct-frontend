import React, {Component} from 'react';
import QuizComponent from './QuizComponent';
import {GuitarNote} from '../helpers/musicEngine';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;   
}

class OuterQuizComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentNote: new GuitarNote(getRandomInt(0, 5), getRandomInt(0, 24))
        }
    }

    nextNote(){
        this.setState({
            currentNote: new GuitarNote(getRandomInt(0, 5), getRandomInt(0, 24))
        })
    }

    render(){
        return (
            <QuizComponent correctAnswer={this.state.currentNote} onSuccess={(cb) => setTimeout(() => {this.nextNote(); cb();}, 1000)}></QuizComponent>
        )
    }
}

export default OuterQuizComponent;