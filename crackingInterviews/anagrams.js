//STATUS : working brute force solution
//given two strings find the minimum number of deletions needed to make them anagrams of each other

//brute force strategy
//count chars
//find the difference in chars, total the difference, & BOOM answer

//edge cases: A and B contain no shared chars

//methods: string iterator
//split then map
//split then reduce
// const countChars = string =>
//   string
//     .split("")
//     .reduce(
//       (charArr, el) => charArr[el.charCodeAt(0) - 97]++,
//       new Array(26).fill(0)
//     );

//String => [idx0,...,idx25] <Number>[]
const countChars = string => {
  let charArr = new Array(26).fill(0);
  string.split("").forEach(el => charArr[el.charCodeAt(0) - 97]++);
  return charArr;
};

//find the total difference in the character counts of the two strings
const anagramIt = (string1, string2) => {
  let charArr1 = countChars(string1);
  let charArr2 = countChars(string2);
  return charArr1.reduce(
    (difference, el, index) => difference + Math.abs(el - charArr2[index]),
    0
  );
};

//testing
let test = () => {
  // console.log(countChars("dank"));
  // console.log(countChars("a"));
  // console.log(countChars("z"));
  // console.log(countChars("abbzzaa"));
  console.log(anagramIt("taco", "cat"));
  console.log(anagramIt("taco", "cato"));
  console.log(anagramIt("taco", "catoaaa"));
  console.log(anagramIt("taco", "catoaoao"));
};
test();
