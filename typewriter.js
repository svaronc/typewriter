const sentence = "hello there from lighthouse labs";
const sentece2 = "we complete the assignment!!!!"

let arrWords = sentence.split("");
let arrWords2 = sentece2.split("");
let delay = 50;

for (const char of arrWords) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}
setTimeout(() => console.log(), delay);

for (const chart of arrWords2) {
  setTimeout(() => {
    process.stdout.write(chart);
  }, delay);
  delay += 50;
}