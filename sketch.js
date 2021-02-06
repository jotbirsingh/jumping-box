var canvas;
var music;
var box;
var surface1,surface2,surface3,surface4;
var edges,bottomEdge,upEdge,rightEdge,leftEdge;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(500,500);
   

    //create 4 different surfaces
    
    surface1=createSprite(40,480,100,20);
    surface1.shapeColor="red";
    surface2=createSprite(170,480,100,20);
    surface2.shapeColor="orange";
    surface3=createSprite(300,480,100,20);
    surface3.shapeColor="blue";
    surface4=createSprite(440,480,100,20);
    surface4.shapeColor="pink";

    //create box sprite and give velocity
    box=createSprite(random(20,45));
    box.scale=0.3;
    box.shapeColor="white";
    box.velocityX=4;
    box.velocityY=4;
 
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
 
   edges = createEdgeSprites();
    box.bounceOff(edges);

    //play music
    
    
    //add condition to check if box touching surface and make it box

      
    if(surface1.isTouching(box)){
        box.shapeColor="red";
         surface1.isTouching(box);
        box.bounceOff(surface1);
        box.velocityX=4;
       
        
    }
    if(surface2.isTouching(box)){
        box.shapeColor="orange";
        surface2.isTouching(box);
        box.bounceOff(surface2);
        box.velocityX=4;
      
        
    
    }
    if(surface3.isTouching(box)){
        box.shapeColor="blue";
        surface3.isTouching(box);
box.bounceOff(surface3);
        box.velocityX=4;
        
        
    
    }
    if(surface4.isTouching(box)){
        box.shapeColor="pink";
        surface4.isTouching(box);
box.bounceOff(surface4);
        box.velocityX=4;
        
        
   
    
        
    }



    drawSprites();
}
