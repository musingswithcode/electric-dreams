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
      var selectedCell = random([drawCellA, drawCellB])
      selectedCell(x, y)
    }
  }
}

function drawCellA(x, y) {
  push()
  translate(x, y)
  arc(0, 0, cellSize, cellSize, 0, 90)
  arc(cellSize, cellSize, cellSize, cellSize, 180, 270)
  pop()
}

function drawCellB(x, y) {
  push()
  translate(x, y)
  arc(0, cellSize, cellSize, cellSize, 270, 360)
  arc(cellSize, 0, cellSize, cellSize, 90, 180)
  pop()
}