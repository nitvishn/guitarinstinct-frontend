import React, { Component } from 'react';

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
                    return function () {
                        console.log(i, j);
                    }
                }
                if (j === 0) {
                    if ((i % 12) % 2 === 1 && (i % 12) % 10 !== 1)
                        frets.push((<div className="note-fret single-fretmark" onClick={func(i, j)}></div>));
                    else if ((i % 12) === 0)
                        frets.push((
                            <div class="note-fret" onClick={func(i, j)}>
                                <div class="double-fretmark"></div>
                            </div>))
                    else
                        frets.push((<div className="note-fret" onClick={func(i, j)}></div>));
                } else {
                    frets.push((<div className="note-fret" onClick={func(i, j)}></div>));
                }
            }
            strings.push((
                <div className="string">
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
    }

    render() {
        return (
            <div>
                So basically, here's the deal, bucko.

                <GuitarComponent frets={24}></GuitarComponent>
            </div>
        )
    }
}

export default QuizComponent;