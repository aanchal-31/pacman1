var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30;
var wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40;
var wall41,wall42,wall43;
var Ghost1Img,Ghost2Img,Ghost3Img,PacmanImg; 
var Ghost1,Ghost2,Ghost3,Pacman 


function preload(){
  Ghost1Img=loadImage("Images/Ghost1.png")
  Ghost2Img=loadImage("Images/Ghost2.png")
  Ghost3Img=loadImage("Images/Ghost3.png")
  PacmanImg=loadImage("Images/Pacman.png ")
}



function setup() {
  createCanvas(500,600);

  wall1=createSprite(40,90,8,150);
  wall1.shapeColor="blue";
  wall2=createSprite(247,20,420,10);
  wall2.shapeColor="blue";
  wall3=createSprite(453,90,8,150);
  wall3.shapeColor="blue";
  wall4=createSprite(246,60,8,75);
  wall4.shapeColor="blue";
  wall5=createSprite(86,170,100,10);
  wall5.shapeColor="blue";
  wall6=createSprite(131,215,10,80);
  wall6.shapeColor="blue";
  wall7=createSprite(86,260,100,10);
  wall7.shapeColor="blue";
  wall8=createSprite(407,170,100,10);
  wall8.shapeColor="blue";
  wall9=createSprite(357,210,10,90);
  wall9.shapeColor="blue";
  wall10=createSprite(402,260,100,10);
  wall10.shapeColor="blue";
  wall11=createSprite(86,303,100,10);
  wall11.shapeColor="blue";
  wall12=createSprite(134,343,10,90);
  wall12.shapeColor="blue";
  wall13=createSprite(86.5,388,105,10);
  wall13.shapeColor="blue";
  wall14=createSprite(38,468,8,170);
  wall14.shapeColor="blue";
  wall15=createSprite(241.5,555,415,10);
  wall15.shapeColor="blue";
  wall16=createSprite(450,479,8,163);
  wall16.shapeColor="blue";
  wall17=createSprite(401.5,397,105,10);
  wall17.shapeColor="blue";
  wall18=createSprite(350,357,10,90);
  wall18.shapeColor="blue";
  wall19=createSprite(400,314,110,10);
  wall19.shapeColor="blue";
  wall20=createSprite(164,201,8,130);
  wall20.shapeColor="blue";
  wall21=createSprite(190,200,50,10);
  wall21.shapeColor="blue";
  wall22=createSprite(323,201,8,130);
  wall22.shapeColor="blue";
  wall23=createSprite(297,201,50,10);
  wall23.shapeColor="blue";
  wall24=createSprite(244,183,8,45);
  wall24.shapeColor="blue";
  wall25=createSprite(320,355,10,95);
  wall25.shapeColor="blue";
  wall26=createSprite(164,348,10,95);
  wall26.shapeColor="blue";
  wall27=createSprite(128,426,45,8);
  wall27.shapeColor="blue";
  wall28=createSprite(147,445.5,8,45);
  wall28.shapeColor="blue";
  wall29=createSprite(57,472,45,8);
  wall29.shapeColor="blue";
  wall30=createSprite(75.8 ,483,8,25);
  wall30.shapeColor="blue";
  wall31=createSprite(57,495,45,8);
  wall31.shapeColor="blue";
  wall32=createSprite(190,491,8,50);
  wall32.shapeColor="blue";
  wall33=createSprite(160,520,110,10);
  wall33.shapeColor="blue";
  wall34=createSprite(198,425,35,8);
  wall34.shapeColor="blue";
  wall35=createSprite(301,425,35,8);
  wall35.shapeColor="blue";
  wall36=createSprite(387,425,45,8);
  wall36.shapeColor="blue";
  wall37=createSprite(366.5,444,8,45);
  wall37.shapeColor="blue";
  wall38=createSprite(425,480,45,8);
  wall38.shapeColor="blue";
  wall39=createSprite(406 ,489,8,25);
  wall39.shapeColor="blue";
  wall40=createSprite(426,498,45,8);
  wall40.shapeColor="blue";
  wall41=createSprite(330,491,8,50);
  wall41.shapeColor="blue";
  wall42=createSprite(345,520,110,10);
  wall42.shapeColor="blue";
  wall43=createSprite(254,502,8,45);
  wall43.shapeColor="blue";
  wall44=createSprite(100,60,60,25);
  wall44.shapeColor="yellow";
  wall45=createSprite(190,60,60,25);
  wall45.shapeColor="yellow";
  wall46=createSprite(350,110,100,20);
  wall46.shapeColor="yellow";
  wall47=createSprite(320,60,60,25);
  wall47.shapeColor="yellow";
  wall48=createSprite(140,110,100,20);
  wall48.shapeColor="yellow";
  wall49=createSprite(245,250,100,20);
  wall49.shapeColor="yellow";
  wall50=createSprite(245,370,100,20);
  wall50.shapeColor="yellow";
 
  Ghost1=createSprite(183,315,20,20)
  Ghost1.addImage(Ghost1Img);
  Ghost2=createSprite(215,315,20,20)
  Ghost2.addImage(Ghost2Img);
  Ghost3=createSprite(247,315,20,20)
  Ghost3.addImage(Ghost3Img);
  Pacman=createSprite(410,58,20,20)
  Pacman.addImage(PacmanImg);
}

function draw() {
  background("black");  
  drawSprites();
   text(mouseX + " " + mouseY,233,347);

}