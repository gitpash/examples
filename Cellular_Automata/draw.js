const ctx = document.getElementById("canvas").getContext("2d")
const cellDim = canvas.width/50
let array = []
let rowNum = canvas.width / cellDim
// define cell obj 
let cell = {
    x: 0, y: 0, width: cellDim, state: 1 
}
//array.push(cell)
//console.log(cell)
//define number of cells in the row
const cellInRow = canvas.width / cellDim
const rowsInCanvas = canvas.height / cellDim
//draw single cell
function drawInitial(x) {
    array.push(cell={x: x, y: 0, width: cellDim, state: 0})
    let canvas = document.getElementById('canvas')
for (let i=0; i<rowNum; i++)
ctx.beginPath()
ctx.fillStyle = 'coral'
ctx.rect(cell.x, cell.y, cell.width, cell.width)
ctx.fill()
ctx.closePath()
x = x + cellDim
}
drawInitial


//draw()
//draw row of cells
function rowOfCells(rows, array) {
    for (let i=0; i<rows; i++) {
        if(array[i].state == 1) {
            ctx.beginPath()
            ctx.fillStyle = 'coral'
            ctx.rect(cell.x, cell.y, cell.width, cell.width)
            ctx.fill()
            ctx.closePath()
        }
        else
             ctx.beginPath()
            ctx.fillStyle = 'black'
            ctx.rect(cell.x, cell.y, cell.width, cell.width)
            ctx.fill()
            ctx.closePath()
    }
}
// draw random row
// function drawRandomRow(array) {
//     for (let i=0; i<array.length; i++) {
//         draw(array)
//     }
// }


// create multiple rows
function MultiRows(numberRows) {
    for(let i=0; i<numberRows; i++) {
        rowOfCells(cellInRow)
        cell.y = cell.y + cell.width
        cell.x = 0
    }
   
}
//MultiRows(100)
//
  function randomBinary() {
      let max = 1
      let min = 0
      return Math.floor(
        Math.random() * (max - min + 1)
      )
    }

// create Random row
function randomStateRow(row) {
    row.forEach(cell => {cell.state = Math.round(Math.random());})
}

rowOfCells(cellInRow, array) //.randomStateRow(cell[0])
randomStateRow(array)
console.log(array)
//console.log(array)
//console.log(array)
//randomStateRow(array)
//rowOfCells(array)
//randomStateRow(row)



//initialize the first row with random state
function SetRandomState(row, randomRow) {
    row.forEach((cell, index) => {
    cell.state = randomRow[index].state;
})
}
//drawRandomRow(array)


//pattern
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // create new image object to use as pattern
  var img = new Image();
  img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
  img.onload = function() {

    // create pattern
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 150, 150);

  }
}