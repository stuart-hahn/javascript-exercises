const palindromes = function (str) {
  const lowerCaseString = str.toLowerCase();

  let cleanedStr = "";

  for (let char of lowerCaseString) {
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      cleanedStr += char;
    }
  }

  const reversedStr = cleanedStr.split("").reverse().join("");
  return reversedStr === cleanedStr;
};

// Do not edit below this line
module.exports = palindromes;
