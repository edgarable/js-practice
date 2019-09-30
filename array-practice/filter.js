let notes = [
  {
    title: "Dar de comer a Lula",
    completed: true
  },
  {
    title: "Ir al Gimnasio",
    completed: false
  },
  {
    title: "Terminar JS",
    completed: false
  },
  {
    title: "Limpiar mi cuarto",
    completed: true
  },
  {
    title: "Correr",
    completed: false
  }
];

console.log(notes);

const removeNoteByTitle = function(notesArray, title) {
  const index = notesArray.findIndex(function(note) {
    return note.title.toLowerCase() === title.toLowerCase();
  });
  if (index > -1) notesArray.splice(index, 1);
  else console.log("No notes were found by that title!");
};

const filterNotes = function(notesArray, title) {
  const isMatch = notesArray.filter(function(note) {
    return note.title.includes(title);
  });
  return isMatch;
};

const filerNotesByStatus = function(notesArray, status) {
  const listMatched = notesArray.filter(function(note) {
    return !note.completed;
  });
  return listMatched;
};

removeNoteByTitle(notes, "OOO");
console.log(notes);

const filteredList = filterNotes(notes,"ar");
console.log(filteredList);

console.log(filterNotes(notes, "ar"));

console.log(filerNotesByStatus(notes, false));
