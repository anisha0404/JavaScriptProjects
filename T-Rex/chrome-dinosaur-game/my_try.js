let board;
let boardWidth=800;
let boardHeight=400;
let context;


//dino
let dinoWidth=88;
let dinoHeight=94;
let dinoX=50;
let dinoY=boardHeight-dinoHeight;
let dinoImg;

let dino={
    x:dinoX,
    y:dinoY,
    width:dinoWidth,
    height:dinoHeight
}


//cactus
 //cactus1
 let cactusArray=[];
 let cactus1Width=35;
 let cactus2Width=70;
 let cactus3Width=200;

 let cactusHeight=70;
 let cactusX=700;
let cactusY=boardHeight-cactusHeight;


let cactus1Image;
let cactus2Image;
let cactus3Image;




window.onload=function(){
    board=document.getElementById("board");
    board.height=boardHeight;
    board.width=boardWidth;
    context=board.getContext("2d");

    // context.fillStyle='green';
    // context.fillRect(dino.x,dino.y,dino.width,dino.height);


    dinoImg=new Image();
    dinoImg.src="/img/dino.png";
    dinoImg.onload=function(){
        context.drawImage(dinoImg,dino.x,dino.y,dino.width,dino.height);
    }
    cactus1Image=new Image();
    cactus1Image.src="./image/cactus1.png";

    cactus2Image=new Image();
    cactus2Image.src="./image/cactus2.png";

    cactus3Image=new Image();
    cactus3Image.src="./image/cactus3.png";

    requestAnimationFrame(update);
    setInterval(placeCactus,1000);

}
function update(){//draw frames for games
    requestAnimationFrame(update);
    context.drawImage(dinoImg,dino.x,dino.y,dino.width,dino.height);
}
