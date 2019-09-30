//EXERCISE: If we list all the natural numbers below 10 that are multiples of 3 or 5, 
//we get 3, 5, 6 and 9. The sum of these multiples is 23.

const solution = (n) => {
  let sum = 0
  for (let i = 1 ; i < n ; i++) {
      if (i % 3 === 0) {
          sum = sum + i
      }
      else if (i % 5 === 0) {
          sum = sum + i
      }
  }
  return sum
}

//make a function that can take any 
//non-negative integer as a argument and return it with its digits in descending order.

function descendingOrder(n){
  return Number(n.toString().split('').sort().reverse().join(''))
}