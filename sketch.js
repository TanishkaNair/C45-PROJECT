function preload(){
    background1 = loadImage("background,png.png");
    //coin1 = loadImage("coin.png")
    //train1 = loadImage("train.png")
    //girl1 = loadImage("girl.png")
}

function setup() {
    createCanvas(1200, 900);
    bg = createSprite(0, 0, 1200, 900);
    bg.addImage(background1);
    
    //coin = createSprite(0, 0, 1200, 900);
    //coin.addImage(coin1);

    //girl = createSprite(0, 0, 1200, 900);
    //girl.addImage(girl1);
}

function draw() {
 drawSprites()
}