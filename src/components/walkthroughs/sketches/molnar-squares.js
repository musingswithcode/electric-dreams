// Max value to offset rectangles by.
var maxOffset = 30

function setup() {
  createCanvas(400, 400)
  rectMode(CENTER)
  noLoop()
}

function draw() {
  background(255)

  for (var size = 10; size < 300; size += 10) {
    var offsetX = random(-maxOffset, maxOffset)
    var offsetY = random(-maxOffset, maxOffset)

    noFill()
    rect(width / 2 + offsetX, height / 2 + offsetY, size, size)
  }
}
