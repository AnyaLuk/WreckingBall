class Ball{
    constructor(x, y, r) {
        var options = {
            'frictionAir':0.005,
            'density':5.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill("pink")
        strokeWeight(2)
        stroke("black")
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
      }
}