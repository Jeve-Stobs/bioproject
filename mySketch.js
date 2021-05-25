var Grass;
var character;
var gravity = 1;
var jump = 15;
var speed = 1;
let x = 40;
var bgImg;
var x1 = 0;
var x2;

var scrollSpeed = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	character = createSprite(300, 100);
	var anim = character.addAnimation('idle', 'stickman.png');
	x2 = width;

	Grass = new Group();

	for (let i = 0; i < 21; i++) {
		ycord = random(1, 600)
		var newTile = createSprite(x, ycord);
		newTile.addAnimation('normal', 'grass.png');
		newTile.addToGroup(Grass);
		newTile.debug = mouseIsPressed;
		x += 80;
	}
}

function preload() {
	bgImg = loadImage("bg.jpg");
}


function draw() {
	character.collide(Grass);
	Grass.displace(character);
	image(bgImg, x1, 0, width, height);
	image(bgImg, x2, 0, width, height);
	x1 -= scrollSpeed;
	x2 -= scrollSpeed;

	if (x1 < -width) {
		x1 = width;
	}
	if (x2 < -width) {
		x2 = width;
	}
	character.velocity.y += gravity;
	character.velocityY = character.velocityY + 0.5;

	if (character.position.x > window.width) {
		character.bounce = true;
	}
	if (keyIsPressed) {
		if (key == 'a') {
			character.velocity.x -= speed;
		} else if (key == 'd') {
			character.velocity.x += speed;
		} else if (key == 'w') {
			character.velocity.y = -jump;
		}
	}
	character.maxSpeed = 10;
	character.setCollider('circle', 0, 0, 20);
	drawSprites();
}