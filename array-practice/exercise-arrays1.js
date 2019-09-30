//EXERCISE: Add dashes to even numbers

const addDashes = function(n) {
  const result = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0 && n[i + 1] % 2 === 0) {
      result.push(n[i] + "-");
    } else {
      result.push(n[i]);
    }
  }
  return result.join("");
};

const num = "025468";
addDashes(num);
