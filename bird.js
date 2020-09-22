class bird {
    constructor(x, y) {
        var options = {
            'density': 1.5,
            'restitution': 0.5,
            'friction': 1.0
        };
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    };
    show() {
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle1 = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle1);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("blue");
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    };
};  

