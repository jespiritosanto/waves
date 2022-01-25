// convert processing to p5

let dropNum = 6000;
const ParticleArray = Array(dropNum);
let alpha;


function setup() {
	// pixelDensity(0.9);
	smooth();
  createCanvas(windowWidth, windowWidth);
	
  background(0);
  noStroke();
	setParticles();
	
  
}

function draw() {
  frameRate(40);
	blendMode(ADD)
  // alpha = map(mouseX, 0, width, 5, 35);
	alpha = map(frameCount%60, 0, width, 0, 55);
	fill(0, alpha);
  // fill(100, alpha/2,random(alpha/2));
  rect(0, 0, width, height);

	
	loadPixels();
	// for (let i = 0; i < dropNum; i++) { 
	// // ParticleArray[i].move();
	// 	ParticleArray[i].update();
	// 	ParticleArray[i].wrap();
	// 	ParticleArray[i].display();
	// }
	
  for (let p of ParticleArray) {
    p.move;
  // p.update();
  // p.wrap();
  // p.display();
  }
	
	updatePixels();
	
	
	
}

function setParticles() {
  for (let i = 0; i < dropNum; i++) { 
    ParticleArray[i]= new Particle();
		// print(ParticleArray[i])
	}
}

function mousePressed() {
  setParticles();
	// saveCanvas("seawaves","jpg")
}

	



class Particle {
	constructor(){
  	this.posX = random(width); 
		this.posY = random(height);
		this.incr = 0; 
		this.theta = 0;
		let adj = map(this.posY, 0, height, 205, 0);
		this.c = color(20, int(adj), 255);
	}


  update() {
    this.incr +=  0.008;
    this.theta = noise(this.posX * 0.008, this.posY * 0.004, this.incr) * TWO_PI;
    this.posX += 2 * cos(this.theta);
    this.posY += 2 * sin(this.theta);
  }

  display() {
		let n = noise(0.01*width)
    if (this.posX > 0 && this.posX < width && this.posY > 0  && this.posY < height) {
      // pixels[int(this.posX) + int(this.posY) * width] =  this.c;
			set(int(this.posX) ,int(this.posY), this.c)
			set(int(this.posX +n) ,int(this.posY +random(5)), color(255,255,255,random(1)))

    }
  }

  wrap() {
    if (this.posX < 0){this.posX = width;}
    if (this.posX > width ){ this.posX =  0;}
    if (this.posY < 0 ){ this.posY = height;}
    if (this.posY > height) {this.posY =  0;}
  }
	
	get move(){
		this.update();
		this.wrap();
		this.display();
	}
	
}