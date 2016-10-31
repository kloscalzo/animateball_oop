//Katharine LoScalzo
//Object Oriented Programming Day 1
//Animate Ball

var animateBall;
var animateBall2;
var animateBall3;
var animateBall4;

function setup() {

    createCanvas(500, 500);
    animateBall = new Ball(200, 100, 5, 0, 70, 255, 255, 0);
    animateBall2 = new Ball(300, 200, 0, 1, 50, 255, 0, 0);
    animateBall3 = new Ball(50, 350, 3, 0, 30, 0, 255, 0);
    animateBall4 = new Ball(450, 50, 0, 10, 10, 0, 0, 255);
}

function draw() {

    background(255);
    animateBall.animate();
    animateBall.display();
    animateBall2.animate();
    animateBall2.display();
    animateBall3.animate();
    animateBall3.display();
    animateBall4.animate();
    animateBall4.display();
}

function Ball(xPos, yPos, xVel, yVel, size, red, green, blue) {

    this.x = xPos;
    this.y = yPos;
    this.xvelocity = xVel;
    this.yvelocity = yVel;
    this.radius = size;
    this.ree = red;
    this.gee = green;
    this.bee = blue;

    this.animate = function () {
        //call animation / motion logic
        this.x += this.xvelocity;
        this.y += this.yvelocity;

        if (this.x >= width || this.x <= 0) {
            this.xvelocity = -this.xvelocity;
        }
        if (this.y >= height || this.y <= 0) {
            this.yvelocity = -this.yvelocity;
        }
    }

    this.display = function () {
        //call geometry logic
        fill(this.ree, this.gee, this.bee);
        ellipse(this.x, this.y, this.radius, this.radius);
    }

}; //semicolon!!