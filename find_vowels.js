function findVowels(letter) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(letter.toLowerCase())) {
    console.log("vowel");
  } else {
    console.log("consonant");
  }
}

console.log(findVowels("k"));

function countVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  const letters = word.split("");
  let i,
    count = 0;
  for (i = 0; i < letters.length; i++) {
    if (vowels.includes(letters[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("word"));