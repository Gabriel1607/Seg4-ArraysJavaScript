class Rectangle {
    constructor(posX,posY,tam){
        this.posX = posX;
        this.posY = posY;
        this.tam  = tam;
    }

    draw(){
        fill(255,0,0);
        rect(this.posX,this.posY,this.tam,this.tam);
    }

    getTam(){
        return this.tam;
    }

    setTam(tam){
        this.tam = tam;
    }
}