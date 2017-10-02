var x = 0;
var y = 0;
var spacing = 5.89;

function setup() {
    createCanvas(400,400);
    background (0);
}

function draw() {
   stroke(255);
    if (random(1) < 0.5) {
        stroke(random(1,255), random(1,255), random(1,255));
        line(x, y, x + spacing, y + spacing);
    }
    else {
        stroke(random(1,255), random(1,255), random(1,255));
        line(x, y+spacing, x+spacing, y);
    }
    x += spacing;
    if (x > width) {
        x = 0;
        y += spacing;
    }

}