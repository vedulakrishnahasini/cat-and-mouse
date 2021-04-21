var cat,jerry;
var catImg1,catImg2, catImg3
var  jerryImg1,jerryImg2,jerryImg3

var garden



function preload(){
 //load the images here
catImg1=loadAnimation("images/tomOne.png");
catImg2=loadAnimation("images/tomTwo.png","images/tomThree.png")
catImg3=loadAnimation("images/tomFour.png");
garden=loadImage("images/garden.png")
jerryImg1=loadAnimation("images/jerryOne.png");
jerryImg2=loadAnimation("images/jerrytwo.png","images/jerryThree.png");
jerryImg3=loadAnimation("images/jerryFour.png");
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600);
cat.scale=0.25;
cat.addAnimation("sleeping",catImg1);
cat.addAnimation("walking",catImg2);
cat.addAnimation("sitting",catImg3);
jerry=createSprite(200,600);
jerry.scale=0.15;
jerry.addAnimation("gift",jerryImg1);
jerry.addAnimation("standing",jerryImg2);
jerry.addAnimation("seeing",jerryImg3);
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-jerry.x <(cat.width-jerry.width)/2){
      cat.velocityX=0;
      jerry.changeAnimation("seeing");
      cat.changeAnimation("sitting");
    }
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
  cat.velocityX=-5;

  cat.changeAnimation("walking");
  jerry.changeAnimation("standing");
  
}




  //For moving and changing animation write code here

}


