const paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";

function countWords(paragraph, word1, word2) {
  let temp = paragraph.split(" ");
  let first_word_count = 0, scond_word_count = 0;

  for (let i of temp) {
    if (word1.toLowerCase() == i.toLowerCase()) {
      first_word_count++;
    }
    if (word2.toLowerCase() == i.toLowerCase()) {
      scond_word_count++;
    }
  }
  if (first_word_count >= scond_word_count) {
    return "The word "+word1+" appears more frequently than "+word2;
  } 
  else {
    return "The word "+word2+" more frequently occurred than "+word1;
  }
}

console.log(countWords(paragraph, "love", "you"));