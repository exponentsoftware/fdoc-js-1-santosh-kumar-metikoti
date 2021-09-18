function withoutSingleLetter(sentence) {
    var ArrwithoutSingleLetter = [];
    sentence.split(" ").filter((x) => {
        if(x.length !== 1) {
            ArrwithoutSingleLetter.push(x);
        }
    });

    return ArrwithoutSingleLetter;
};
const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;
var newSentence = withoutSingleLetter(sentence);

function varietyOfWords(str) { 
    let set = new Set(str);
    return set.size;
}

console.log(varietyOfWords(newSentence))