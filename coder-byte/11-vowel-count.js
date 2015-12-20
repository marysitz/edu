//Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge. 

function VowelCount(str) { 
  var vowels = "aeiou";
  var vowelsArray = vowels.split('');
  var strLowerCase = str.toLowerCase();
  var myVowels = [];
  for (var x = 0; x < str.length; x++) {
    if (vowelsArray.indexOf(strLowerCase[x]) > -1) {
      myVowels.push(strLowerCase[x]); 
    }
  }
  return myVowels.length;
}
console.log(VowelCount("All cows eat grass"));
