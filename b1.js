let n = 7;
let star = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    star += "#";
  }
  star += "\n";
}
console.log(star);