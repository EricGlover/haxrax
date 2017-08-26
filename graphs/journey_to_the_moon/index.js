/*
let case1 = `5 3
0 1
2 3
0 4`
*/

// haystack.find((subArr, index) => {
//   console.log("subArr = ", subArr);
//   console.log(`needle = ${needle}, index = ${index}`);
//   if (subArr.includes(needle)) {
//     console.log("found things");
//     subArrIndex = index;
//     return true;
//   }
//   return false;
// });
// return subArrIndex || false;

let checkTree = (haystack, needle) => {
  // var subArrIndex;
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i].includes(needle)) {
      return i;
    }
  }
  return false;
};

class JourneyToTheMoon {
  constructor(name) {
    this.name = name;
    this.convertStringToNum = regexConversion;
    this.checkTree = checkTree;
  }
  numberOfPairs(input) {
    // console.log(this.name, " = this");
    const numArr = this.convertStringToNum(input);
    let n = numArr[0];
    let p = numArr[1];
    var pairs = numArr.slice(2);

    //make a country tree
    var astronautsByCountry = [];
    for (var i = 0; i < pairs.length; i += 2) {
      let a1 = this.checkTree(astronautsByCountry, pairs[i]);
      let a2 = this.checkTree(astronautsByCountry, pairs[i + 1]);
      //add both to that country if a1 || a2 !== false
      if (a1 !== false) {
        astronautsByCountry[a1].push(pairs[i + 1]);
      } else if (a2 !== false) {
        astronautsByCountry[a2].push(pairs[i]);
      } else {
        //add both to a new country
        astronautsByCountry.push([pairs[i], pairs[i + 1]]);
      }
    }
    //add all the non-mentioned astronauts
    //n - flat.length  = missing astronauts
    let mentionedAstronauts = astronautsByCountry.reduce((length, arr) => {
      return length + arr.length;
    }, 0);
    let unmentionedAstronauts = n - mentionedAstronauts;
    for (let i = 0; i < unmentionedAstronauts; i++) {
      astronautsByCountry.push([-1]);
    }
    // console.log(
    //   "astronauts = ",
    //   n,
    //   " astronautsByCountry = ",
    //   astronautsByCountry
    // );
    // console.log("country tree is now = ", astronautsByCountry);
    //do some calculations
    debugger;
    let total = astronautsByCountry.reduce((result, subArr, i, arr) => {
      // console.log("subArr ", result);
      // console.log(`Outer LOOP: loop# = ${i}, result = ${result}`);
      let subSum = arr.slice(i + 1).reduce((result, iterArr, j, arr) => {
        // console.log(`INNER LOOP: loop# = ${j}, result = ${result}`);
        return result + iterArr.length * subArr.length;
      }, 0);
      // console.log(
      //   `Outer LOOP: loop# = ${i}, subSum = ${subSum}, result = ${result}`
      // );
      return result + subSum;
    }, 0);
    console.log("******************     END       *************************");
    return total;
  }
}

module.exports = JourneyToTheMoon;

let regexConversion = string => {
  // console.log(this.name, " = this");
  let regex = /[0-9]+/g;
  let matches = [];
  let match = regex.exec(string);
  while (match) {
    let foundNum = Number(match[0]);
    matches.push(foundNum);
    match = regex.exec(string);
  }

  return matches;
};
let loopMethodConversion = string => {
  let str = "";
  let nums = [];
  let reg = /[0-9]/;
  for (let i = 0; i < string.length; i++) {
    //is num
    reg.test();
  }
  var r = /[0-9]+/g;
  return [];
};

let test = () => {
  journeyToTheMoon = new JourneyToTheMoon("dank");
  let case1 = `5 3
0 1
2 3
0 4`;
  const result = journeyToTheMoon.numberOfPairs(case1);
};
test();
