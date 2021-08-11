class Note {
    constructor(pitch, octave) {
        this.pitch = pitch;
        this.octave = octave;
    }

    addInterval(interval) {
        this.pitch += interval.noteDelta;
        this.octave += Math.floor(this.pitch / 12);
        this.pitch = ((this.pitch % 12) + 12) % 12;
    }

    toString() {
        console.log(this.pitch, this.octave);
        return pitchesToNoteNames[this.pitch] + this.octave.toString();
    }

    clone() {
        return new Note(this.pitch, this.octave);
    }
}

pitchesToNoteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
stringsToNotes = [new Note(4, 4), new Note(11, 3), new Note(7, 3), new Note(2, 3), new Note(9, 2), new Note(4, 2),];

class Interval {
    constructor(interval) {
        this.noteDelta = interval;
    }

    add(interval2) {
        return new Interval(this.noteDelta + interval2.noteDelta);
    }
}

class GuitarNote {
    constructor(string, fret) {
        this.string = string;
        this.fret = fret;
        this.note = stringsToNotes[this.string].clone()
        this.note.addInterval(new Interval(fret));
    }

    toString() {
        return "<GuitarNote " + this.note.toString() + ">";
    }
}