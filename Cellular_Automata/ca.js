const ctx = document.getElementById("canvas").getContext("2d")
const cellDim = canvas.width/50
const NumberCol = canvas.height/100
let color = 'red'
let cellRowCount = 3
let cellColumnCount = 101
let Cell = [] // 
for (c = 0; c < cellColumnCount; c++) { // содержит колонны
  Cell[c] = []
  for (r = 0; r < cellRowCount; r++) { // колонны содержат ряды
   Cell[c][r] = { x: 0, // ряд содердит объект с координатами
                     y: 0,
                     state: 1 } // это для столкновений
  }
}


// define random-state initial row
function randomStateRow(row) {
    row.forEach(Cell => {Cell.state = Math.round(Math.random());})
}

function drawCellRow() {
  cells[r].forEach(function(Cell, col) {
      Cell.x = 
  })
      if (Cell[r].state == 1) { // если статус 1 то рисуем блок
      // определяем коорд. блока по Х это его ширина+отступ между блоками помн. номер колонны + отступ от слева
      let brickX = c * (cellDim+8)
      // коорд. по У это высота+отступ между помн. на номер строки + отступ сверху
      let brickY = r * (cellDim+8)

      Cell[c][r].x = brickX
      Cell[c][r].y = brickY
      ctx.beginPath()// отрисовываем полученые блоки канвасом
      ctx.rect(brickX, brickY, cellDim, cellDim)
      ctx.fillStyle = 'coral'
      ctx.fill()
      ctx.closePath()
    }
  }
 }
}



function drawRow(index) {

  cells[index].forEach(function(cell, column) {
    cell.x = column * scale;
    cell.y = index * scale;
    if (cell.status == 1) {
      cx.beginPath();
      cx.rect(cell.x, cell.y, scale, scale);
      cx.fillStyle = color || randomColor;
      cx.fill();
      cx.closePath();
    }
  });
}

//testing

randomStateRow(Cell[*][1])
drawCellRow()
// ctx = canvas.getContext('2d')
// function draw() {
//     let canvas = document.getElementById('canvas')
// ctx.beginPath()
// ctx.fillStyle = 'rgb(200, 0, 0)'
// ctx.rect(0, 0, cellDim, cellDim)
// ctx.fill()
// ctx.closePath()
// ctx.beginPath()
// ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
// ctx.rect(30, 30, 50, 50);
// ctx.fill()

// }
// draw()