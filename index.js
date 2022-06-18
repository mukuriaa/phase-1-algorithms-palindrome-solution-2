function isPalindrome(word) {
  // Write your algorithm here
  for (let indexStart = 0; indexStart < word.length/2; indexStart++) {
    const indexEnd = word.length - 1 -indexStart;
    if (word[indexStart] !== word[indexEnd]) {
      return false
    } else {
      return true
    }
    
  }
}

/* 
  Add your pseudocode here
  We are using a alternative approach to this challenge.
  1. Iterate from the first character to the middle.
     Compare the first character to the last character and so until the characters meet in the mmiddle.
  2. Assign the last character a index and initialize the index.
  3. If the two characters are are not strictly equal return false.
  4. Else return true.
*/

console.log(isPalindrome("power"))

/*
  Add written explanation of your solution here
*/

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
