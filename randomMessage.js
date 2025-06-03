const scaleChoice = ["Major", "Minor", "Diminished", "Augmented"];
const rootNoteChoice = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const chordTypeChoice = ["Triad", "Seventh", "Ninth", "Eleventh", "Thirteenth"];
const randomElement = (array) => array[Math.floor(Math.random() * array.length)];

const generateRandomMessage = () => {
    const scale = randomElement(scaleChoice);
    const rootNote = randomElement(rootNoteChoice);
    const chordType = randomElement(chordTypeChoice);
    
    return `Practice a: ${scale} scale starting on: ${rootNote} with a: ${chordType} chord.`;
};
console.log(generateRandomMessage());