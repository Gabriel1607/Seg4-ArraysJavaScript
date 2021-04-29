

let screen;
let figNum;
let mistake;

function setup(){
    createCanvas(800,400);
    screen=0;
    figNum=1;
    mistake=false;
}


function draw(){
  drawScreen(); 
    
//console.log(mouseX);
//console.log(figNum);
}
function mousePressed(){
    changeScreen();
}





function drawScreen(){
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
            text(figNum,(width/2), (height/2)+10);
            rect((width/2), (height/2)+100, 305, 55);
            fill(255);
            text("Continuar",(width/2), (height/2)+110);
            mistakeMessage();
        break;  
        case 1:
            rectMode(CORNER);
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

function changeScreen(){
    switch(screen){
        case 0:
        //Boton de aumentar
            if(((width/2)+100-(55/2)<mouseX&&mouseX<(width/2)+100+(55/2))&&
        (height/2)-(55/2)<mouseY&&mouseY<(height/2)+(55/2)){
            Increase();
        }
        //Boton de reducir
        if(((width/2)-100-(55/2)<mouseX&&mouseX<(width/2)-100+(55/2))&&
        (height/2)-(55/2)<mouseY&&mouseY<(height/2)+(55/2)){
            Decrease();
        }
        //Boton de continuar
            if(((width/2)-(305/2)<mouseX&&mouseX<(width/2)+(305/2))&&
            (height/2)+100-(55/2)<mouseY&&mouseY<(height/2)+100+(55/2)){
                
                screen=1;
            
        }
            break;
            case 1:
                //Boton de aumentar
                if(((width/6)*1<mouseX&&mouseX<((width/6)*1)+105)&&
                (height/4)*3<mouseY&&mouseY<(height/4)*3+55){
                    Increase();
                    console.log(figNum);
                }
                //Boton de reducir
                if(((width/6)*2<mouseX&&mouseX<((width/6)*2)+105)&&
                (height/4)*3<mouseY&&mouseY<(height/4)*3+55){
                    Decrease();
                    console.log(figNum);
                }
                //Boton de duplicar tamaños
                if(((width/6)*3<mouseX&&mouseX<((width/6)*3)+105)&&
                (height/4)*3<mouseY&&mouseY<(height/4)*3+55){
                    
                    console.log("dupliTam");
                }
                //Boton de crear arreglo de circulos
                if(((width/6)*4<mouseX&&mouseX<((width/6)*4)+105)&&
                (height/4)*3<mouseY&&mouseY<(height/4)*3+55){
                    
                    console.log("circArray");
                }
                break;
}
}
function Increase(){
    
            if(figNum<10){  
             
        figNum++;
    }else{
        mistake=true;
    }
        
}
function Decrease(){
    
            if(figNum>1){  
             
        figNum--;
    }else{
        mistake=true;
    }
        
}
function mistakeMessage(){
if(mistake){
    textSize(30);
   
    text("El número debe estar entre 1 y 10",400,100)
}
}


