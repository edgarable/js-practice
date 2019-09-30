//EXERCISE: Get number of vowels displayed in a string

const myString = "hola me llamo Edgar Alfaro";

function getVowels(str) {
  const strToArray = str.split("");
  const a = strToArray.filter(letter => letter.toLowerCase() === "a").length;
  const e = strToArray.filter(letter => letter.toLowerCase() === "e").length;
  const i = strToArray.filter(letter => letter.toLowerCase() === "i").length;
  const o = strToArray.filter(letter => letter.toLowerCase() === "o").length;
  const u = strToArray.filter(letter => letter.toLowerCase() === "u").length;

  console.log(`a:${a}, e:${e}, i:${i}, o:${o}, u:${u}`);
}

getVowels(myString);

