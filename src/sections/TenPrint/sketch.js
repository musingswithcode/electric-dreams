// Size of grid cells (cellSize x cellSize).
var cellSize = 40

// Bias towards one shape over another.
var bias = 0.5

function setup() {
  createCanvas(400, 400)
  noLoop()
}

function draw() {
  background(255)
  
  for (var y = 0; y < height; y += cellSize) {
    for (var x = 0; x < width; x += cellSize) {
      if (random() < bias) {
        line(x, y, x + cellSize, y + cellSize)
      } else {
        line(x, y + cellSize, x + cellSize, y)
      }
    }
  }
}