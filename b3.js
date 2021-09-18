function reverseArray(array) {
    var output = [];
    while (array.length) {
      output.push(array.pop());
    }
  
    return output;
  }
  
  console.log(reverseArray(["A", "B", "C"]));