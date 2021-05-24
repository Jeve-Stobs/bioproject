var Grass;
var character;
var gravity = 1;
var jump = 15;
var speed = 1;
let x = 40;
function setup() {
	createCanvas(600, 600);
	background(100);
	character = createSprite(300,100);
	var anim = character.addAnimation('idle', 'stickman.png');
	
	Grass = new Group();
	
	for (let i=0; i<21; i++) {
		var newTile = createSprite(x,550);
		newTile.addAnimation('normal', 'grass.png');
		newTile.addToGroup(Grass);
		newTile.debug = mouseIsPressed;
		x+=80;
	}
}

function draw() {
	background(100);
	character.collide(Grass);
	Grass.displace(character);
	Grass[0].debug = mouseIsPressed;
	Grass[1].debug = mouseIsPressed;
	Grass[2].debug = mouseIsPressed;
	Grass[3].debug = mouseIsPressed;
	Grass[4].debug = mouseIsPressed;
	Grass[5].debug = mouseIsPressed;
	Grass[6].debug = mouseIsPressed;
	Grass[7].debug = mouseIsPressed;
	Grass[8].debug = mouseIsPressed;
	Grass[9].debug = mouseIsPressed;
	Grass[10].debug = mouseIsPressed;
	character.debug = mouseIsPressed;
	character.velocity.y += gravity;
	
	if (character.position.x>window.width) {
		character.bounce = true;
	}
	if (keyIsPressed) {
	if (key == 'a') {
			character.velocity.x -= speed;
		}else if (key == 'd') {
		character.velocity.x += speed;
		}else if (key == 'w'&&character.position.y>460) {
		character.velocity.y = -jump;
		character.rotate = 11;
		}
	}
	character.maxSpeed = 10;
	character.setCollider('circle',0,0,20);
	drawSprites();
}