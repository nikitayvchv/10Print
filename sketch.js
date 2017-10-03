//Declaring Variables
var x = 0;
var y = 0;
var spacing = 5.89;

//Declaring funcion "setup", which draws the canvas for the code on the browser page
function setup() {
    createCanvas(400,400);
    //Makes the background black
    background (0);
}

//Declaring function "draw", which will repeat over and over again
function draw() {
    //An if statement that will choose a random number between 0 and 1, and determine which line of code to use based on the outcome
    if (random(1) < 0.5) {
        //If the number is less than 0.5, then it will make a diagonal line going down to the left, in a random color
        stroke(random(1,255), random(1,255), random(1,255));
        line(x, y, x + spacing, y + spacing);
    }
    else {
        //If the number is greater, then it'll make a diagonal line going down to the right, in a random color
        stroke(random(1,255), random(1,255), random(1,255));
        line(x, y+spacing, x+spacing, y);
    }
    //Adds 1 to variable spacing
    x += spacing;
    
    //An if statement so that if the x value is greater than the width of the canvas, it'll go to the next line
    if (x > width) {
        x = 0;
        y += spacing;
    }

}
