var bg , sleep , brush , gym , eat , bath
function preload (){
sleep = loadAnimation("sleep.png")  
bg = loadImage ('iss.png')
gym= loadAnimation ('gym1.png')
eat = loadAnimation ("eat1.png")
brush = loadAnimation ( 'brush.png')
bath = loadAnimation ('bath1.png')
}
  




function setup() {
  createCanvas(800,400);
  astranaut = createSprite(400, 200, 50, 50);
  astranaut.addAnimation('sleeping', sleep)
  astranaut.scale= 0.1
}

function draw() {
  background(bg);  
  drawSprites();
  if ( keyDown ('UP_ARROW')){
    astranaut.addAnimation('brushing',brush)
    astranaut.changeAnimation ('brushing')
  }
  if ( keyDown ('DOWN_ARROW')){
    astranaut.addAnimation('bathing',bath)
    astranaut.changeAnimation ('bathing')
  }
  if ( keyDown ('LEFT_ARROW')){
    astranaut.addAnimation('gyming',gym)
    astranaut.changeAnimation ('gyming')
  }
  if ( keyDown ('RIGHT_ARROW')){
    astranaut.addAnimation('eating',eat)
    astranaut.changeAnimation ('eating')
  }
}