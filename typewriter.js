const timer = function (sentence) {
  let arrWords = sentence.split("");
  let delay = 50;

  for (const char of arrWords) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
  setTimeout(() => console.log(), delay);
};

timer("Hello my name is sebastian");