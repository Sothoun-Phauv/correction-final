/**
 * Given the number (integer), return the emoji (string), following the rules
 * @param  number a number (1, 2, 3 or 4)
 * @return the emoji, as a string
 */
function getEmoji(number) {
  // TODO:
  let emoji = "";
  if (number === 1) {
    emoji = "😊"
  } else if (number === 2) {
    emoji = "🥰";
  } else if (number === 3) {
    emoji = "😂";
  } else {
    emoji = "🥱";
  }
  return emoji;
}

function updateEmoji() {
  // 1- TODO: Get the selected number from the radio (1, 2, 3 or 4)
  for (input of inputRadio) {
    if (input.checked) {
      let numOfemoji = input.value;
      // 2- TODO: Get the emoji as a string using getEmoji function
      // 3 - TODO Upate the h1Message
      h1Message.textContent = getEmoji(parseInt(numOfemoji));
    }
  }
}

/** Main code  */
const inputRadio = document.querySelectorAll("input");
const h1Message = document.querySelector("#message");
document.addEventListener("change", updateEmoji);
