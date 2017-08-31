//STATUS: complete
//find the next lucky number

//constraints
//10^5 <= number <= 10^6 -2 && therefore number must always be six digits
const sum = number => {
  let sum = 0;
  do {
    let digit = Math.floor(number % 10);
    sum += digit;
  } while (Math.floor((number /= 10)));
  return sum;
};

const findNextLuck = number => {
  //split the number into left half and right half
  //sum the left half
  let lhs = Math.floor(Number(number) / 1000);
  let lhSum = sum(lhs);
  let rhs = Number(number) % 1000 + 1;

  //find next sum(rhs) === lhSum
  while (lhs < 1000) {
    while (rhs < 1000) {
      if (sum(rhs) === lhSum) return lhs * 1000 + rhs;
      rhs++;
    }
    //edge case : you need to increment lhs sometimes
    rhs = 0;
    lhs++;
    lhSum = sum(lhs);
  }
  return false;
};

const test = () => {
  console.log(findNextLuck(555555));
  console.log(findNextLuck(110001));
  console.log(findNextLuck(100110));
};
test();
