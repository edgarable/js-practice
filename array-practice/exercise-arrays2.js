//EXERCISE: How many times a char is displayed

const arr2 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

let n1 = 0,
  index = 0;

for (let i = 0; i < arr2.length; i++) {
  if (
    n1 <
    arr2.filter(x => {
      return x === arr2[i];
    }).length
  ) {
    n1 = arr2.filter(x => {
      return x === arr2[i];
    }).length;
    index = i;
  }
}

console.log(`${arr2[index]} (${n1} times)`);