class Circle extends Figure {
    constructor(posX,posY,tam){
        super(posX,posY,tam);
    }

    draw(){
        fill(255,0,0);
        ellipse(this.posX,this.posY,this.tam,this.tam);
    }

    getTam(){
        return this.tam;
    }

    setTam(tam){
        this.tam = tam;
    }
}