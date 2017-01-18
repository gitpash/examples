const canvas = document.getElementById('gameCanvas')// связываем id canas и  const canvas
const ctx = canvas.getContext('2d') // для рисования канвасом исп ctx

// ctx.beginPath()
// ctx.rect(20, 40, 50, 50) //первые две это координаты вехнего левого угла, а вторые две это ширина и высота
// ctx.fillStyle = "#FF0000" // цвет для метода заливки каваса fill
// ctx.fill() //  вызов метода заливки
// ctx.closePath()
//
// ctx.beginPath()
// ctx.arc(240, 160, 20, 0, Math.PI*2, false) //1 и 2 - координаты центра, 3я-радиус, 4и5 начальный/конечный угол отрислвки
//                                           // в радианах, направление отрисовки(false по часовой и true против) опционально
// ctx.fillStyle = "green"
// ctx.fill()
// ctx.closePath
//
// ctx.beginPath()
// ctx.rect(160, 10, 100, 40)
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)" // 0.5 это полупрозрачный
// ctx.stroke() // метод stroke рисует контур фигуры
// ctx.closePath()
let x = canvas.width / 2
let y = canvas.height - 30
let dx = 2
let dy = -2
const ballRadius = 10
let paddleHeight = 10
let paddleWidth = 75
let paddleX = (canvas.width-paddleWidth)/2
let rightPressed = false
let leftPressed = false
let brickRowCount = 3
let brickColumnCount = 5
let brickWidth = 75
let brickHeight = 20
let brickPadding = 10
let brickOffsetTop = 30
let brickOffsetLeft = 30

let bricks = [] // двумерный массив блоков
for (c = 0; c < brickColumnCount; c++) { // содержит колонны
  bricks[c] = []
  for (r = 0; r < brickRowCount; r++) { // колонны содержат ряды
    bricks[c][r] = { x: 0, // ряд содердит объект с координатами
                     y: 0 }
  }
}
document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", KeyUpHandler, false)




//добавляем реакцию на событие

// когда кнопка нажата - значение true записывается в переменную
function keyDownHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = true
  }
  else if(e.keyCode == 37) {
    leftPressed = true
  }
}

// после того как кнопка отпущенна переменная возвращается в false
function KeyUpHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = false
  }
  else if(e.keyCode == 37) {
    leftPressed = false
  }
}
// рисуем мяч
function drawBall() {
  ctx.beginPath()
  ctx.arc(x, y, ballRadius, 0, Math.PI*2) //1 и 2 - координаты центра, 3я-радиус, 4и5 начальный/конечный угол отрисовки
                                            // в радианах, направление отрисовки(false по часовой и true против) опционально
  ctx.fillStyle = "#0095DD"
  ctx.fill()
  ctx.closePath()
}
// рисуем площадку
function drawPaddle() {
  ctx.beginPath()
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight)
  ctx.fillStyle = "#0095DD"
  ctx.fill()
  ctx.closePath()
}

//  рисуем блоки, проходим по кол и рядам и задаем координаты блоков
function drawBricks() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      // определяем коорд. блока по Х это его ширина+отступ между блоками помн. номер колонны + отступ от слева
      let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft
      // коорд. по У это высота+отступ между помн. на номер строки + отступ сверху
      let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop

      bricks[c][r].x = brickX
      bricks[c][r].y = brickY
      ctx.beginPath()// отрисовываем полученые блоки канвасом
      ctx.rect(brickX, brickY, brickWidth, brickHeight)
      ctx.fillStyle = "#0095DD"
      ctx.fill()
      ctx.closePath()

    }
  }
}
// отрисовка игрового поля
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height) //этот метод очищает поле канваса с принимая аргуметами
  drawBricks() // рисуем кирпичи                                               //1 и 2 коорд. левого верхнего угла и 3 и 4 коорд. правого нижнего
  drawBall() // рисуем мяч
  drawPaddle() // рисуем площадку

  //условие отскока от левого и правого краев
  if(x + dx > (canvas.width - ballRadius) || x + dx < ballRadius) {
    dx = -dx
  }

  // отскок от потолка
  if(y + dy < ballRadius) {
    dy = -dy
  }

  // если центр мяча касается площадки - отскок
  else if(y + dy > (canvas.height - ballRadius)) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      if(y = y - paddleHeight) {
      dy = -dy
  }
    }
    // если мяч касается нижнего края - выводим алерт
    else {
    alert('Ooops! Something went wrong...')
    document.location.reload()// перезагружаем страницу
  }
}
  // движение площадки в рамках окна канваса
  if(rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7
  }
  else if (leftPressed && paddleX > 0) {
    paddleX -= 7
  }
  x += dx
  y += dy

}

setInterval(draw, 10)
