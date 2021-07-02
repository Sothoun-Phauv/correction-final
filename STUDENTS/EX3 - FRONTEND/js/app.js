let emojis = [
  {
    icon: "😓",
    sign: "):",
  },
  {
    icon: "😄",
    sign: "(:",
  },
  {
    icon: "🧑",
    sign: "(:)",
  },
  {
    icon: "🙂",
    sign: ":)",
  },
  {
    icon: "🤕",
    sign: ":(",
  },
];

/**
 * @param a word
 * @returns the emoi related to the word  (by looking at the emojis array) - or null if not found
 * Example word = "):"  return = "🤕"
 */
function getEmoji(word) {
  // TODO
  for (emoji of emojis) {
    if (word === emoji.sign) {
      return emoji.icon;
    }
  }
  return word;
}

function addMessage(event) {
  // 1- TODO: Get value from input
  let message = document.querySelector("#message").value;
  // 2- TODO: Use function name: split() to cut each word by space
  //     more detail: https://www.w3schools.com/jsref/jsref_split.asp
  let words = message.split(" ");
  // 3 - For each words, replace by the emoji if can be found  ( use  getEmoji function)
  let newWord = "";
  for (word of words) {
    newWord += getEmoji(word) + " ";
  }
  // 4 - Build a string with all words (put space between each words)
  // And finally :
  // 5 -  Create a <p> on the messageContainer with the built string
  let p = document.createElement("p");
  p.textContent = newWord;
  messageContainer.appendChild(p);
}

/**  MAIN  */
const messageContainer = document.querySelector("#messageContainer");
const addButton = document.querySelector("button");
addButton.addEventListener("click", addMessage);
// TODO: Call function addMessage when clicking on ADD button
