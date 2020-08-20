
// Test1
// Describe: pigLatin()
// Test: "For words beginning with a vowel, it will add "way" to the end."
// Expect(pigLatin("at enter i")).toEqual("atway enterway iway")

// Test 2
// Describe: pigLatin()
// Test: "For words beginning with one or more consonants, it will move all of the first consecutive consonants to the end, and add "ay"."
// Expect(pigLatin("pig latin").toEqual("igpay  atinlay")

// Test 3
// Describe: pigLatin()
//  Test: "If the first consonants include "qu", it will move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!"
// Expect(pigLatin("quiet squeal")).toEqual("ietquay ealsquay")

// Test 4
// Describe: pigLatin()
// Test: "For words beginning with "y", it will treat "y" as a consonant."
// Expect(pigLatin("yellow yacht").toEqual("ellowyay achtyay")

//Business Logic
const vowels = /[aeiou]/i;


function pigLatin (string) {
  const inputArray = string.toLowerCase().split(" ");
  let newArray = inputArray.map(function(word){
    if (word[0].match(vowels)) {
      return word.concat("way");
    } else {
      let firstVowelIndex = findFirstVowel(word)
      if (firstVowelIndex === 0){
        return word.slice(1).concat("yay");
      }
      let firstConsonant = word.slice(0, firstVowelIndex);
      if (firstConsonant.includes("q")) {
        return word.slice(firstVowelIndex + 1).concat(firstConsonant + "uay");
      };
      return word.slice(firstVowelIndex).concat(firstConsonant + "ay");
    };
  }); 
  return newArray.join(" ");
};

function findFirstVowel (word) {
  let firstVowel;
  let lowerCaseWord = word.toLowerCase();
  for (let i = 0; i < lowerCaseWord.length; i++){
    if (lowerCaseWord[i].match(vowels) || lowerCaseWord[i] === "y"){
      firstVowel = i;
      break;
    }
  }
  return firstVowel;
}

//User Interface Logic
$(document).ready(function(){
  $("form#pigLatin").submit(function(event){
    event.preventDefault();
    const userInput = $("input#enterText").val();

    $("#translate").show();
    $(".result").text(pigLatin(userInput));
  });
});