
var canvas;
var music;
var surface1,surface2,surface3,surface4
var ball


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(733,800);

    //create 4 different surfaces
    surface1 = createSprite(80,780,175,30)
    surface1.shapeColor=rgb(0,0,204)

    surface2 = createSprite(270,780,175,30)
    surface2.shapeColor=rgb(255,128,0)

    surface3 = createSprite(460,780,175,30)
    surface3.shapeColor= rgb(190, 1, 60)

    surface4 = createSprite(650,780,175,30)
    surface4.shapeColor=rgb(0,100,0)



    //create box sprite and give velocity
    ball=createSprite(random(20,750),400,45,45)
    ball.setVelocity(7,6);

    
    
    

  

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite 
    edges = createEdgeSprites()
    ball.bounceOff(edges)
   
    
    

    //add condition to check if box touching surface and make it box
    if(ball.isTouching(surface1) && ball.bounceOff(surface1)){
        ball.shapeColor=rgb(0,0,204)
        music.play()
    }

    if(ball.isTouching(surface2)){
        ball.shapeColor=rgb(255,128,0)
        music.stop()
        ball.velocityX=0
        ball.velocityY=0
  
    }

    if (ball.isTouching(surface3) && ball.bounceOff(surface3)){
        ball.shapeColor=rgb(190,1,60)
    }

    if(ball.isTouching(surface4) && ball.bounceOff(surface4)){
        ball.shapeColor=rgb(0,100,0)
    }

   drawSprites()
  

}
