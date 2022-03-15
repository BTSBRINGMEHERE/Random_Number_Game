const form = document.querySelector("#forms");
const randNum = document.querySelector("#randomNum");
const inputNum = document.querySelector("#inputNum");
const greeting = document.querySelector("#greeting");
const greeting2 = document.querySelector("#greeting2");

function makeRandnum(event) {
  event.preventDefault();
  const rangeNum = randNum.value;
  const myNum = inputNum.value;
  const randomNum = Math.floor(Math.random() * rangeNum);
  result(myNum, randomNum);
}

form.addEventListener("submit", makeRandnum);

function result(myNum, randNum) {
  greeting.innerText = `You chose : ${myNum}, The machine chose ${randNum}`;
  myNum = parseInt(myNum);
  if (myNum === randNum) {
    greeting2.innerText = "You won!";
  } else if (myNum < 0) {
    greeting2.innerText = "Wrong Number!";
  } else {
    greeting2.innerText = "You lose!";
  }
}
