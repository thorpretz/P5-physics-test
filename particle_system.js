
var ParticleSystem = function(position) {
	this.origin = position.copy();
  	this.particles = [];

  this.addParticle = function() {
  	this.particles.push(new Particle(this.origin));
  };

  this.run = function() {
  	for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };

  this.applyForce = function(f) {
    for(var i = 0; i < this.particles.length; i++){
      this.particles[i].applyForce(f);
    }
  };

  this.applyRepeller = function(r) {
    for(var i = 0; i < this.particles.length; i++){
      var p = this.particles[i];
      var force = r.repel(p);
      p.applyForce(force);
    }
  };
};
