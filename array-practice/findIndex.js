// Practicing findIndex
const notes = [
  {
    title: "Trip 1",
    body: "this is trip 1"
  },
  {
    title: "Trip 2",
    body: "this is trip 2"
  },
  {
    title: "Trip 3",
    body: "this is trip 3"
  }
];

const index = notes.findIndex(function(note, index) {
  return note.title === "Trip 2";
});

const findNote = function(notesArray, title) {
  const index = notesArray.findIndex(function(note) {
    return note.title === title;
  });
  return notesArray[index];
};

console.log(index);

const note = findNote(notes, "Trip 2")
console.log(note);
