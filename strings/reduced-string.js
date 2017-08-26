// //my method
// //looping through the string arr and replacing duplicates
//   //always starting from the beginning after each replacement
//
// //considered alterations: using regex
// //
// function super_reduced_string(s) {
//   // console.log(removePairs(s));
//   let workingCopy = s;
//   let previousPass;
//   let temp;
//   while (previousPass !== workingCopy) {
//     let temp = workingCopy;
//     workingCopy = removePairs(workingCopy);
//     previousPass = temp;
//   }
//   return workingCopy || "Empty String";
// }
// //single pass
// function removePairs(s) {
//   numberRemoved = 0;
//   let lastChar = "";
//   //we're removing pairs backwards and exiting
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === lastChar) {
//       //the double slice
//
//       //let front = s.slice()
//       //the replace
//       //s = s.slice(i + 1);
//       s = s.replace(`${s[i]}${s[i]}`, "");
//       break;
//     } else {
//       lastChar = s[i];
//     }
//   }
//   console.log(s);
//   return s;
// }
function super_reduced_string(s) {
  // console.log(removePairs(s));
  let workingCopy = s;
  workingCopy = removePairs(workingCopy);
  return workingCopy || "Empty String";
}
//alterated
function removePairs(s) {
  numberRemoved = 0;
  let lastChar = "";
  //we're removing pairs backwards and exiting
  for (let i = 0; i < s.length; ) {
    console.log(`i = ${i}`);
    console.log(`s = ${s}`);
    if (s[i] === lastChar) {
      s = s.replace(`${s[i]}${s[i]}`, "");
      i = -1;
      lastChar = "";
      console.log(`just replaced, s is now = ${s}`);
    } else {
      lastChar = s[i];
    }
  }
  console.log(`returned answer = ${s}`);
  return s;
}
module.exports = {
  super_reduced_string,
  removePairs
};
