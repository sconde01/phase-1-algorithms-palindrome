//----------------------------------------------writing it like this helped me undersand better and workd:
// const isPalindrome =(word) => {
//     let newString = "";
//     for (let i = word.length - 1; i >= 0; i--){
//       newString += word[i];
//     }
//     return newString === word;
//   }  

// isPalindrome ("racecar"); 
// What did you do here, Stephanie? I created a new string for "word" breaking each letter down by number...then reversing each letter assigned by number...wheeeeww

//------------------------Optimize:
// const reverse = (word) => {
//   return word.split("").reverse().join("");
// }

// const isPalindrome = (word) =>{
//   const reversedWord = reverse(word);
//   return word === reversedWord;
// }
//optimize further!:

function reverse (word){
  return word.split("").reverse().join("");
}

function isPalindrome (word){
  const reversedWord = reverse(word);
  return word === reversedWord; 

}






// You can run `node index.js` to view these console logs
if (require.main === module) {
// add your own custom tests in here
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
