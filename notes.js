const notes = [
    {
        id: 1,
        subject: "gitHub",
        date: "July 14, 2021",
        feeling: "moderate",
        timeSpent: 240
    },

    {
        id: 2,
        subject: "css",
        date: "July 10, 2021",
        feeling: "no bueno",
        timeSpent: 480
    }
]
const noteAboutToday = {
        id: 3,
        subject: "JavaScript",
        date: "July 16, 2021",
        feeling: "Good",
        timeSpent: 180
}
notes.push(noteAboutToday);
/*console.log(notes)
for (const note of notes) {
    console.log(`Note ${note.id}
    ${note.date}
    I learned ${note.subject}.
    I spent ${note.timeSpent} minutes working on it.
    I felt ${note.feeling}.`)
}

const searchTerm = "Good"
for (const note of notes) {
    if (note.feeling === searchTerm) {
        console.log(note)
    }
}

const nextNote = {
    subject: "functions",
    date: "July 16, 2021",
    feeling: "so so",
    timeSpent: 60
}

const addAnotherNote = (noteObject) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1
    notes.id = idForNewNote
    notes.push(noteObject)

}


addAnotherNote(nextNote)
console.log(notes)*/

const nextNote = {
    subject: "functions",
    feeling: "so so",
    timeSpent: 60
}

const addAnotherNote = (noteObject) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1
    notes.id = idForNewNote
    const dateCreated = date.now()
    notes.date = dateCreated
    notes.push(noteObject)

}


addAnotherNote(nextNote)
console.log(notes)