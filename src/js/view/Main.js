

let screen;

function setup(){
    createCanvas(800,400);
    screen=1;
}


function draw(){
  changeScreen(); 
    
}

function changeScreen(){
    switch(screen){
        case 0:
            background(232,120,146);
            rectMode(CENTER);
            fill(255);
            rect((width/2)-100, height/2, 55, 55);
            rect((width/2)+100, height/2, 55, 55);
            rect((width/2), height/2, 105, 55);
            fill(0); 
            textSize(32);
            textAlign(CENTER);
            text("-",(width/2)-100, (height/2)+10);
            text("+",(width/2)+100, (height/2)+10);
            rect((width/2), (height/2)+100, 305, 55);
            fill(255);
            text("Continuar",(width/2), (height/2)+110);
        break;  
        case 1:
            background(120,206,232);
            fill(255);
            rect((width/6)*1,(height/4)*3,105,55);
            rect((width/6)*2,(height/4)*3,105,55);
            rect((width/6)*3,(height/4)*3,105,55);
            rect((width/6)*4,(height/4)*3,105,55);
            fill(0);
            textSize(30);
            textAlign(CENTER);
            text("+",((width/6)*1)+53,((height/4)*3)+37);
            text("-",((width/6)*2)+53,((height/4)*3)+37);
            text("tam x 2",((width/6)*3)+53,((height/4)*3)+37);
            text("◯",((width/6)*4)+53,((height/4)*3)+37);
            
            break;
    }
}


