let m;

function setup() {
  createCanvas(400, 400);
  m = new Mover(50, 50, 10);
  m2 = new Mover (300, 300, 50);
}

function draw() {
  background(220);
  m.update();
  m.show();

  m2.update();
  m2.show();

  if (mouseIsPressed) {
    //make attract to mouse position
    let mousePos = createVector(mouseX, mouseY);

    m.attractTo(mousePos);
    m2.attractTo(mousePos);

    // let f = p5.Vector.sub(mousePos, m.pos);
    // f.limit(2);
    // m.applyForce(f);
    //
    // let f2 = p5.Vector.sub(mousePos, m2.pos);
    // f2.limit(2);
    // m2.applyForce(f2);
  }
}
