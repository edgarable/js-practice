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

console.log(
  notes.sort(function(a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  })
);
