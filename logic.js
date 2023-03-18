let players = ["x", "o"];
let activePlayer = 0;
let boardGame;
 
let winPos = [
  ["0", "0", "1", "1", "2", "2"],
  ["0", "2", "1", "1", "2", "0"],
  ["0", "0", "0", "1", "0", "2"],
  ["1", "0", "1", "1", "1", "2"],
  ["2", "0", "2", "1", "2", "2"],
  ["0", "0", "1", "0", "2", "0"],
  ["0", "1", "1", "1", "2", "1"],
  ["0", "2", "1", "2", "2", "2"]
];
 
function switchPlayer() {
 if (activePlayer === "x") {
  return (activePlayer = "o");
 } else {
 return (activePlayer = "x");
  };
} 
// тернарный оператор
// function switchPlayer() {
//   activePlayer === "x" ? (activePlayer = "o") : (activePlayer = "x");
// }

function startGame() {
  //создали поле
  boardGame = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
 
  //установка активного игрока
  activePlayer = players[Math.floor(Math.random() * 2)];
  // console.log("Первый игрок: " + activePlayer);
 
  renderBoard(boardGame);
  stepCount = 0;
}
 
let dataX = [];
let dataO = [];
let stepCount = 0;
function click(row, column) {
  //записываем символ игрока
  boardGame[row][column] = activePlayer;
  switchPlayer();
  //отрисовываем поле
  renderBoard(boardGame);
  stepCount++;
  if (stepCount === 9) {
    alert ("Ничья"); // выводит информацию вверху страницы
  }
  if (activePlayer === players[0]) {
    dataX.push(row);
    dataX.push(column);
  } else if (activePlayer === players[1]) {
    dataO.push(row);
    dataO.push(column);
  };
   if (winGame(boardGame)) {
      showWinner(activePlayer);
    }
  // console.log(dataX);
  // console.log(dataO);
}
 
function winGame() {
  for (let i = 0; i < winPos.length; i++) {
    const winArr = winPos[i];
    const pos = [];
    for (let j = 0; j < winArr.length; j++) {
      if (j % 2) {
        const y = winArr[j],
          x = winArr[j - 1];
        pos.push(boardGame[y][x]);
      }
    }
    if (pos[0] == pos[1] && pos[1] == pos[2] && pos[2] !== "") {
      return pos;
    }
  }
  return null;
}
