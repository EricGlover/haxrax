/*
Colleen is turning  years old! Therefore, she has  candles of various heights on her cake, and candle  has height . Because the taller candles tower over the shorter ones, Colleen can only blow out the tallest candles.

Given the  for each individual candle, find and print the number of candles she can successfully blow out.

Input Format

The first line contains a single integer, , denoting the number of candles on the cake.
The second line contains  space-separated integers, where each integer  describes the height of candle .
*/
let descending = (a, b) => b - a;

function birthdayCakeCandles(n, ar) {
  //sort ar
  ar.sort(descending);
  //find total amount of tallest candles
  const numberOfTallestCandles = ar.findIndex(num => num !== ar[0]);
  if (numberOfTallestCandles === -1) return ar.length;
  return numberOfTallestCandles;
}
