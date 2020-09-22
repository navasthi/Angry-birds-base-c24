class pigs {
    constructor(x, y) {
        var options = {
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1        
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }
    show() {
        var pos = this.body.position;
        var angle1 = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle1);
        rectMode(CENTER);
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
    }
}