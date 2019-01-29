
var Particle = function(position) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255.0;

  this.run = function() {
    this.update();
    this.display();
  };

  this.applyForce = function(f) {
    this.acceleration.add(f);
  };


  this.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  };

  
  this.display = function() {
    stroke(255, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  };

  this.isDead = function(){
    if (this.lifespan < 0.0) {
        return true;
    } else {
      return false;
    }
  };
};
