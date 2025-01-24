// Padding around the canvas.
var padding = 20

// Size of grid cells (cellSize x cellSize).
var cellSize = 40

// Probabiity of drawing an inner rectangle.
var chance = 0.8

function setup() {
  createCanvas(400, 400)
  rectMode(CENTER)
  noLoop()
}

function draw() {
  background(255)
  
  for (var y = padding; y < height - 2 * padding; y += cellSize) {
    for (var x = padding; x < width - 2 * padding; x += cellSize) {
      drawCell(x + cellSize/2, y + cellSize/2)
    }
  }
}

function drawCell(x, y) {
  push()
  translate(x, y)
  for (var size = 5; size <= cellSize; size += 5) {
    if (random() < chance) {
      noFill()
      rect(0, 0, size, size)  
    }
  }
  pop()
}