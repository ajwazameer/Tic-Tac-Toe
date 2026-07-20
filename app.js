let boxes = document.querySelectorAll(".box");
console.log(boxes);
let resetBtn = document.querySelector("#reset-btn");
console.log(resetBtn);
let header = document.querySelector(".headerBox");
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let turn = null;
let winner = false;
let tie = false;
let takeTurn = (e) => {
  if (!winner) {
    if (turn === "O" || turn === null) {
      if (e.target.innerText != "X" && e.target.innerText != "O") {
        e.target.innerText = "O";
        turn = "X";
        result();
      }
      return;
    } else {
      if (e.target.innerText != "X" && e.target.innerText != "O") {
        e.target.innerText = "X";
        turn = "O";
        result();
      }
      return;
    }
  }
};
let result = () => {
  for (let pattern of winPattern) {
    let first = boxes[pattern[0]].innerText;
    let sec = boxes[pattern[1]].innerText;
    let third = boxes[pattern[2]].innerText;
    if (first === sec && sec === third && first != "") {
      header.innerText = `${first} is the Winner!`;
      boxes[pattern[0]].style.backgroundColor = "#a9dca2ff";
      boxes[pattern[1]].style.backgroundColor = "#a9dca2ff";
      boxes[pattern[2]].style.backgroundColor = "#a9dca2ff";
      winner = true;
      return;
    }
  }
  for (let val of boxes) {
    console.dir(val);
    if (val.innerText == "") {
      tie = false;
      break;
    }
    tie = true;
  }
  if (tie && !winner) {
    header.innerText = "Game is tie";
    console.log(header.innerText);
  } else {
    header.innerText = `${turn}'s Turn`;
    console.log(header.innerText);
  }
};
let reset = (e) => {
  boxes.forEach((box, index) => {
    box.innerText = "";
    box.style.backgroundColor = "aliceblue";
  });
  header.innerText = "";
  turn = null;
  winner = false;
  tie = false;
};

boxes.forEach((box, index) => {
  box.addEventListener("click", takeTurn);
});
resetBtn.addEventListener("click", reset);
