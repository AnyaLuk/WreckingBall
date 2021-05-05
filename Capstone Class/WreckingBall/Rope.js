class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            
            length: 400
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }


    display(){
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            stroke("black")
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        
    }
    
}