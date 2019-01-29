var Repeller = function(x, y) {
  this.power = 300;
  this.position = createVector(x, y);

  this.display = function() {
    stroke(255);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, 32, 32);
  };

  this.repel = function(p) {
    var dir = p5.Vector.sub(this.position, p.position); 
    var d = dir.mag();                                
    dir.normalize();                                  
    d = constrain(d, 1, 100);                         
    var force = -1 * this.power/ (d * d);             
    dir.mult(force);                                  
    return dir;
  };
};
