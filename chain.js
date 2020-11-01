class Chain{
    constructor(bodyA, bodyB){
       var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.01,
            length:25
        }

        this.body = Matter.Constraint.create(options);
        World.add(world, this.body);
    }

    display(){
        line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.body.bodyB.position.x, this.body.bodyB.position.y);
    }

}