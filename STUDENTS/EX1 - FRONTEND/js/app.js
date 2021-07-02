/**
 * @param {*} event
 * @description: This function use to change border color and border radius of box
 */
function changeLayout(event) {
  // TODO: Get value from inputs
  let color = document.querySelector("#color").value;
  let raduis = document.querySelector("#raduis").value;
  // TODO: Change box style with CSS
  box.style.border = "solid " + color + " 3px";
  box.style.borderRadius = raduis + "px";

}

/**
 * Main code
 */
const box = document.querySelector(".box");

// Listen to change on the box and call changeLayout function
document.addEventListener("change", changeLayout);
