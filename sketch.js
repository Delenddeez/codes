let resetbutton;
var r;
var g;
var b;
let slider;
function setup(){
    createCanvas(windowWidth, windowHeight);
	resetbutton = createButton('reset drawing');
	resetbutton.position(0,0);
	resetbutton.mousePressed(resetpg);
	slider = createSlider(1,10,5,1);
	slider.position(120,0);
	slider.changed(resetpg);
}
function resetpg(){
	clear();
}

function draw(){
	cursor(CROSS);
	r = random(255); 
    g = random(100,200); 
    b = random(100); 
    a = random(200,255);
	if(mouseIsPressed){	
	line(pmouseX,pmouseY,mouseX,mouseY);
	stroke(r,g,b,a);
	strokeWeight(slider.value());
	}
}