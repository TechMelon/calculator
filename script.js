let res = 0;
const screenElement = document.querySelector(".screen");
screenElement.textContent = res;

function set(Number) {
  // screenElement.textContent += Number;
  if (screenElement.textContent == 0) {
    screenElement.textContent = Number;
  } else {
    screenElement.textContent += Number;
  }
}

function cls(){
    screenElement.textContent = res;
}

function calculator() {
   try {
    screenElement.textContent = eval(screenElement.textContent);
   }
    catch (error) {
    screenElement.textContent = "Error";
   }
}

function del() {
    screenElement.textContent = screenElement.textContent.slice(0,-1);
}