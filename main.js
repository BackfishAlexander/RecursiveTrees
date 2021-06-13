//Math and concept based on a YouTube video by Daniel Shiffman

let theta;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  frameRate(30);
  stroke(255);
  let a = (mouseX / width) * 90;
  theta = radians(a);
  translate(width/2,height);
  line(0,0,0,-120);
  translate(0,-120);
  branch(120);

}

function branch(h) {
  h *= 0.66;
  if (h > 2) {
    push();   
    rotate(theta);   
    line(0, 0, 0, -h);  
    translate(0, -h); 
    branch(h);       
    pop();   
    push();
    rotate(-theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();
  }
}

function windowResized() {
  resizeCanvas(max(windowWidth, 450), max(windowHeight, 450));
}
