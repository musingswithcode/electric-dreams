// Padding around the canvas.
var padding = 20

// Size of grid cells (cellSize x cellSize).
var cellSize = 40

function setup() {
  createCanvas(400, 400)
  angleMode(DEGREES)
  noLoop()
}

function draw() {
  background(255)

  for (var y = padding; y < height - 2 * padding; y += cellSize) {
    for (var x = padding; x < width - 2 * padding; x += cellSize) {
      drawCell(x + cellSize/2, y + cellSize/2, 16)
    }
  }
}

function drawCell(x, y, r) {
  push()
  translate(x, y)
  
  var lines = [
    [0, 0, r * cos(30), r * sin(30)], [0, 0, r * cos(90), r * sin(90)], [0, 0, r * cos(150), r * sin(150)], [0, 0, r * cos(210), r * sin(210)], [0, 0, r * cos(270), r * sin(270)], [0, 0, r * cos(330), r * sin(330)],
    [r * cos(30), r * sin(30), r * cos(90), r * sin(90)], [r * cos(90), r * sin(90), r * cos(150), r * sin(150)], [r * cos(150), r * sin(150), r * cos(210), r * sin(210)], [r * cos(210), r * sin(210), r * cos(270), r * sin(270)], [r * cos(270), r * sin(270), r * cos(330), r * sin(330)], [r * cos(330), r * sin(330), r * cos(30), r * sin(30)] 
  ]
  
  var randomIndex = floor(random(0, lines.length))
  for (var i = 0; i < lines.length; i++) {
    if (i != randomIndex) {
      line(...lines[i])
    }
  }
  
  pop()
}
