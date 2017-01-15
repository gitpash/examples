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
  ctx.arc(x, y, ballRadius, 0, Math.PI*2, false) //1 и 2 - координаты центра, 3я-радиус, 4и5 начальный/конечный угол отрисовки
                                            // в радианах, направление отрисовки(false по часовой и true против) опционально
  ctx.fillStyle = "#0095FF"
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

// отрисовка игрового поля
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height) //этот метод очищает поле канваса с принимая аргуметами
                                                  //1 и 2 коорд. левого верхнего угла и 3 и 4 коорд. правого нижнего
  drawBall() // вызываем мяч
  drawPaddle()
  if(x + dx > (canvas.width - ballRadius) || x + dx < ballRadius) {
    dx = -dx
  }

  if(y + dy > (canvas.height - ballRadius) || y + dy < ballRadius) {
    dy = -dy
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
