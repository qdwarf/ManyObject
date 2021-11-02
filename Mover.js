class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.m = m;
    this.c = color(random(200, 255), random(200, 255), random(200, 255));
  }

  applyForce(aForce) {
    let f = p5.Vector.div(aForce, this.m);
    this.acc.add(f);
    
  }

  attractTo(aPos) {
    let f = p5.Vector.sub(aPos, this.pos);
    f.limit(1);
    this.applyForce(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(random(-5,5),random(-5,5));
    this.acc.mult(0.05);
  }

  show() {
    fill(0);
    circle(this.pos.x, this.pos.y, this.m);
  }

  drawOn(c) {
    c.fill(this.c);
    c.noStroke();
    c.circle(this.pos.x, this.pos.y, this.vel.mag()*5);
  }
  checkEdge() {
    if (this.pos.y > height) {
      this.vel.y = this.vel.y * -1;
      this.pos.y = height;
    }
    if (this.pos.y < 0) {
      this.vel.y = this.vel.y * -1;
      this.pos.y = 0;
    }
    if (this.pos.x > width) {
      this.vel.x = this.vel.x * -1;
      this.pos.x = width;
    }
    if (this.pos.x < 0) {
      this.vel.x = this.vel.x * -1;
      this.pos.x = 0;
    }
  }
}