var thief, thiefImage, ground, invisibleGround;
var bgImage;

function preload()
{
  thiefImage = loadImage("images/thief.png");
  bgImage = loadImage("images/wallImage.jpg");
  artifact1 = loadImage("images/artifact.png");
  artifact2 = loadImage("images/diamond.png");
  artifact3 = loadImage("images/monaLisa.png");
  artifact4 = loadImage("images/vase.png");
}

function setup() 
{
  createCanvas(1200,800);
  //creating ground and assigning velocity
  ground = createSprite(600, 780, 1500, 20);
  ground.velocityX = 5;
  //creating invisible ground
  invisibleGround = createSprite(600, 740, 1500, 20);
  invisibleGround.visible = false;
  //creating thief
  thief = createSprite(1200, 730, 50, 50);
  thief.addImage(thiefImage);
  thief.scale = 0.2;
  thief.setCollider("rectangle", 0, 0, 100, 100);
}

function draw() 
{
  background(bgImage);  
  //remaking ground 
  if(ground.x > 700)
  {
    ground.x = ground.width/2;
  }
  //making thief move with arrow keys
  if(keyDown(LEFT_ARROW))
  {
    thief.x = thief.x - 10;
  }
  if(keyDown(RIGHT_ARROW))
  {
    thief.x = thief.x + 10;
  }
  if(keyDown("space"))
  {
    thief.velocityY = -5;
  }
  thief.velocityY = thief.velocityY + 0.5;

  //making thief collide with ground
  thief.collide(invisibleGround);
  thief.debug = 'true';
  ground.debug = 'true';

  spawnArtifacts();

  drawSprites();
}
//spawn the artifacts
function spawnArtifacts()
{
  if(frameCount % 60 === 0)
  {
    var artifact = createSprite(random(100,600), random(100,600), 20, 20);
    var r = Math.round(random(1,4));
    switch(r)
    {
      case 1 : artifact.addImage(artifact1);
      break;
      case 2 : artifact.addImage(artifact2);
      break;
      case 3 : artifact.addImage(artifact3);
      break;
      case 4 : artifact.addImage(artifact4);
      break; 
      default : break;
    }
    artifact.scale = 0.2;
    if(artifact.isTouching(artifact))
    {
      artifact.x = random(600,700);
      artifact.y = random(600,700);
      console.log("Hello");
    }
  }
}