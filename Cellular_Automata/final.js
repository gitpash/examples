const ctx = document.getElementById("canvas").getContext("2d");
const cellDim = 8;
let array = [];
let newArray = [];
let count = 0;
const color = "red";
const rowNumber = 100;

// define cell Constructor
function Cell() {
  (this.x = 0), (this.y = 0), (this.width = cellDim), (this.state = 0);
}

function draw(elem) {
  // console.log(elem)
  ctx.beginPath();
  if (
    elem.state == 1 // if true
  )
    ctx.fillStyle = "black";
  else ctx.fillStyle = "coral";
  ctx.rect(elem.x, elem.y, elem.width, elem.width);
  ctx.fill();
  ctx.closePath();
}

function drawRandomStateRow(number) {
  let randomCell = new Cell();

  for (let i = 0; i < number; i++) {
    //array.push(element)
    randomCell.state = Math.round(Math.random());
    draw(randomCell);
    randomCell.x = randomCell.x + cellDim;
    //  console.log(randomCell.state)
    array.push(randomCell.state);
    newArray.push(randomCell.state);
  }
}

function DrawNextRow(array, n, newArray) {
  // console.log('before', array)
  array = newArray;
  // console.log('after', array)
  const rowLength = array.length;
  let ruledCell = new Cell();
  count = 0;
  ruledCell.y = 8 * n;

  for (let i = 0; i < array.length; i++) {
    let leftCorner;
    let rightCorner;
    let target = ruledCell;
    let aboveCell = array[i];

    if (array[i - 1] === undefined) {
      leftCorner = array[rowLength - 1];
    } else {
      leftCorner = array[i - 1];
    }

    if (array[i + 1] === undefined) {
      rightCorner = array[0];
    } else {
      rightCorner = array[i + 1];
    }

    let toggleClass = setStateByRule.bind(
      null,
      target,
      leftCorner,
      aboveCell,
      rightCorner
    );

    toggleClass([1, 1, 1], 1);
    toggleClass([1, 1, 0], 0);
    toggleClass([1, 0, 1], 1);
    toggleClass([1, 0, 0], 1);
    toggleClass([0, 1, 1], 0);
    toggleClass([0, 1, 0], 1);
    toggleClass([0, 0, 1], 1);
    toggleClass([0, 0, 0], 1);
    target.x += 8;
  }
}

function setStateByRule(
  target,
  leftCorner,
  aboveCell,
  rightCorner,
  rule,
  ruleValue
) {
  let matchesRule =
    leftCorner === rule[0] && aboveCell === rule[1] && rightCorner === rule[2];
  //   console.log(1===1 && 1===1 && 0===1)
  if (matchesRule) {
    target.state = ruleValue;
    newArray[count] = ruleValue;
    draw(target);
    count++;
  }
}

function drawAll(array, rows) {
  drawRandomStateRow(100);
  let n = 1;
  while (n < rows) {
    DrawNextRow(array, n, newArray);
    n++;
  }
}

drawAll(array, 100);
