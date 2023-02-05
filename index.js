const button = document.getElementById("button");
const wordElement = document.getElementById("word");

button.addEventListener("click", function() {
  fetch("words.txt")
    .then(response => response.text())
    .then(text => {
      const words = text.split("\n");
      const randomIndex = Math.floor(Math.random() * words.length);
      wordElement.innerText = words[randomIndex];
    });
});
