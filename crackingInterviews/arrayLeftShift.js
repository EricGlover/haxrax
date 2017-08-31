//status : complete
//input
// 5 4          n, d where n = arr.length and d = left-shifts performed
// 1 2 3 4 5
//output
// 5 1 2 3 4

//
const leftShift = (arr, d) => {
  //range for d is 0 - arr.length - 1
  const leftShifts = d % arr.length;
  console.log("left shifts = ", leftShifts);
  //grab the beginning of the new arr
  let shiftedArr = arr.slice(leftShifts);
  //grab the end of the new arr
  shiftedArr = shiftedArr.concat(arr.slice(0, leftShifts));
  return shiftedArr;
};

let test = () => {
  console.log(leftShift([1, 2, 3, 4, 5], 4));
};
test();
let toString = (arr, delimiter) => {
  return arr.reduce((string, el) => string + " " + el.toString(), "").trim();
};
