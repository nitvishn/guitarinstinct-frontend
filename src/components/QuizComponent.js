import React, { Component } from 'react';
import {GuitarNote} from '../helpers/musicEngine';

class GuitarComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var strings = [];
        for (var j = 0; j < 6; j++) {
            var frets = [];
            for (var i = 0; i <= this.props.frets; i++) {
                const func = (i, j) => {
                    return () => {
                        this.props.onPress(j, i);
                    }
                }
                if (j === 0) {
                    if ((i % 12) % 2 === 1 && (i % 12) % 10 !== 1)
                        frets.push((<div key={i} className="note-fret single-fretmark" onClick={func(i, j)}></div>));
                    else if ((i % 12) === 0)
                        frets.push((
                            <div key={i} className="note-fret" onClick={func(i, j)}>
                                <div className="double-fretmark"></div>
                            </div>))
                    else
                        frets.push((<div key={i} className="note-fret" onClick={func(i, j)}></div>));
                } else {
                    frets.push((<div key={i} className="note-fret" onClick={func(i, j)}></div>));
                }
            }
            strings.push((
                <div className="string" key={j}>
                    {frets}
                </div>
            ));
        }
        return (
            <div className="fretboard">
                {strings}
            </div>
        )
    }
}

class QuizComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            correctAnswer: this.props.correctAnswer,
            pressedNote: null,
            success: false,
        }
    }

    pressNote(string, fret){
        this.setState({
            pressedNote: new GuitarNote(string, fret)
        }, () => {
            if(this.state.pressedNote.noteEquals(this.state.correctAnswer)){
                this.props.onSuccess(() => {
                    this.setState({
                        correctAnswer: this.props.correctAnswer,
                        pressedNote: null,
                        success: false,
                    })
                });
                this.setState({
                    success: true
                })
            }else{
                console.log("does not equal");
            }
        })
    }

    render() {
        console.log(this.state);
        const successMessage = this.state.success ? (
            <h1 className="success">Good job!</h1>
        ) : ""
        const noteMessage = this.state.success ? "" : this.state.pressedNote ? (
            <h1>Play {this.state.correctAnswer.note.toString()}, <span className="error">not {this.state.pressedNote.note.toString()}.</span></h1>
         ) : <h1>Play {this.state.correctAnswer.note.toString()}.</h1>
        return (
            <div className="mt-5">
                <div className="row text-center">
                    {successMessage}
                    {noteMessage}
                </div>
                <GuitarComponent frets={24} onPress={(string, fret) => this.pressNote(string, fret)}></GuitarComponent>
            </div>
        )
    }
}

export default QuizComponent;