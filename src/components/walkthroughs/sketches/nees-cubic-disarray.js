// Padding around the canvas.
var padding = 20

// Size of grid cells (cellSize x cellSize).
var cellSize = 40

// Max amount to rotate cells by (degrees).
var maxRotate = 30

// Max amount to translate cells by.
var maxTranslate = 15

function setup() {
  createCanvas(400, 400)
  rectMode(CENTER)
  angleMode(DEGREES)
  noLoop()
}

function draw() {
  background(255)

  for (var y = padding; y < height - 2 * padding; y += cellSize) {
    for (var x = padding; x < width - 2 * padding; x += cellSize) {
      drawCell(x + cellSize / 2, y + cellSize / 2)
    }
  }
}

function drawCell(x, y) {
  push()
  translate(x, y)

  var translateBy = random(-maxTranslate, maxTranslate) * y / height
  var rotateBy = random(-maxRotate, maxRotate) * y / height
  translate(translateBy, 0)
  rotate(rotateBy)

  rect(0, 0, cellSize, cellSize)

  pop()
}
