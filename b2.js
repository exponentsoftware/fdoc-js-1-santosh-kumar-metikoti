function sevenRandomNumbers(){
    var arr = [];
    while(arr.length < 7) {
        var r = Math.floor(Math.random() * 9);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

console.log(sevenRandomNumbers());
