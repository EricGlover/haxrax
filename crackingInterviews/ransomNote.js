//RANSOM Note
//input
//number of words in magazine, number of words in the note
// The second line contains m space-separated strings denoting the words present in the magazine.
//The third line contains n space-separated strings denoting the words present in the ransom note.
//output YES or NO

//CASE 1 :
// 6 4
//give me one grand today night
//give one grand today
//ANSWER: Yes

const makeWordHash = wordArr => {
  let hash = {};
  wordArr.forEach(word => {
    hash[word] = hash[word] + 1 || 1;
  });
  return hash;
};
const hashCompare = (a, b) => {
  for (let word in b) {
    if (a.hasOwnProperty(word) && a[word] >= b[word]) {
      //continue
    } else {
      return false;
    }
  }
  return true;
};

function main() {
  var m_temp = readLine().split(" ");
  var m = parseInt(m_temp[0]);
  var n = parseInt(m_temp[1]);
  magazine = readLine().split(" ");
  ransom = readLine().split(" ");
  const magazineHash = makeWordHash(magazine);
  const ransomHash = makeWordHash(ransom);
  const answer = hashCompare(magazineHash, ransomHash) ? "Yes" : "No";
  console.log(answer);
  return answer;
}
console.log(makeWordHash(["things", "a", "a", "a"]));
