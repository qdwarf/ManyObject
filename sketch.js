let m;
let movers = [];

function setup() {
  createCanvas(400, 400);
  // canvas =
  m = new Mover(50, 50, 10);
  m2 = new Mover (300, 300, 50);

  for (let=0; i<5; i++){
    let mover = new Mover(random(400), randow(400), random(5,50));
    movers.push(mover);
  }
}

function draw() {
  background(220);

  // for (let i=0; i<movers.length; i++){
  //   let mover = movers[i];
  //   m.update();
  //   m.show();
  }

  for (let mover of movers) {
    mover.update();
    mover.show();
    // mover.drawOn(canvas);
  }


  if (mouseIsPressed) {
    //make attract to mouse position
    let mousePos = createVector(mouseX, mouseY);

    for (let mover of movers){
      movers.attractTo(mousePos);
    }
    // m.attractTo(mousePos);
    // m2.attractTo(mousePos);
  }
}
