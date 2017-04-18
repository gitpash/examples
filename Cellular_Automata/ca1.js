const ctx = document.getElementById("canvas").getContext("2d")
//colors and scale
let color = 'red';
// const cellColor = document.getElementById('cellColor');
// cellColor.addEventListener('change', function () {
//   if (psychoOn.checked) {
//     psychoOn.checked = false;
//   }
//   color = cellColor.value;
// })

let canvasColor = "black";
// const canvasUserColor = document.getElementById('canvasColor');
// canvasUserColor.addEventListener('change', function () {
//   canvasColor = canvasUserColor.value;
//   clearCanvas();
// })

const scale = 4;
const rowCount = Math.floor(ctx.canvas.height / scale);
const columnCount = Math.floor(ctx.canvas.width / scale);


console.log("columns: " + columnCount + " rows: " + rowCount);

// функции для задания начального состояния

let randomColor;
function getRandomColor() {
  let max = 254;
  red = Math.floor(Math.random() * max);
  green = Math.floor(Math.random() * max);
  blue = Math.floor(Math.random() * max);
  randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  return randomColor;
}

function setRandomRow(row) {
  row.forEach(cell => {cell.status = Math.round(Math.random());});
}

function setOneCellRow(row) {
  let posX = Math.round(columnCount / 2);
  row[posX].status = 1;
}

function setFullRow(row) {
  row.forEach(cell => {cell.status = 1});
}

function setEmptyRow(row) {
  row.forEach(cell => {cell.status = 0});
}

function createEmptyRow(row) {
  row = [];
  for (let i = 0; i < columnCount; i++) {
    row[i] = {x: 0, y: 0, status: 0};
  }
}

let cells=[];
function createStart() {
  for (let row = 0; row < rowCount; row++) {
    cells[row] = [];
    let randomColorValue = getRandomColor();
    cells[row].color = randomColorValue || color;
    for (let column = 0; column < columnCount; column++) {
      cells[row][column] = {x: 0, y: 0, status: 0};
    }
  }
}

createStart();
// рисование

function drawRow(index) {
//   if (psychoOn.checked) {
//     getRandomColor();
//   }
  cells[index].forEach(function(cell, column) {
    cell.x = column * scale;
    cell.y = index * scale;
    if (cell.status == 1) {
      ctx.beginPath();
      ctx.rect(cell.x, cell.y, scale, scale);
      ctx.fillStyle = color || randomColor;
      ctx.fill();
      ctx.closePath();
    }
  });
}

function drawAllRows(cells) {
  cells.forEach((_, index) => {drawRow(index)});
}





// NextRow
function netxRow(row1, row2) {

  row2.forEach((cell, index) => {
    cell.status = row1[index].status;
  })
}




// проверки
setFullRow(cells[0])
setRandomRow(cells[0]);
// setOneCellRow(cells[0]);
// setFullRow(cells[2]);
//copyRow(cells[0], cells[3]);
drawRow(0)
netxRow(cells[0], cells[1])