function setup() {
  createCanvas(620, 620);
  noLoop(); // Draw only once
}

function draw() {
  background(255); //255 white
  stroke(0);
  
  let spacing = 25;
  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      let p = { x: x / spacing, y: y / spacing };
      let v = vectorField(p);
      drawArrow(createVector(x, y), createVector(x + v.x * 10, y - v.y * 10));
    }
  }
  
  stroke(0); // Black color
  strokeWeight(2); // Line thickness
  
  noLoop();
}

function vectorField(p) { 
  return {
    x: Math.cos(Math.cos(p.y) - p.x * p.y),
    y: p.x
  }; 
}

function drawArrow(base, vec) {
  let arrowSize = 7;
  let angle = atan2(vec.y - base.y, vec.x - base.x);
  
  line(base.x, base.y, vec.x, vec.y);
  
  push();
  translate(vec.x, vec.y);
  rotate(angle);
  line(0, 0, -line, arrowSize / 2);
  line(0, 0, -line, -arrowSize / 2);
  pop();
}
