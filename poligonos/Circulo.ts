class Circulo{
    private radio:number

    public constructor(radio:number){
        this.radio = radio
    }

    public getRadio(){
        return this.radio
    }

    public getPerimetro(){
        return 2*Math.PI*this.radio
    }

    public getArea(){
        return Math.PI*(this.radio*this.radio)
    }

}   
export{Circulo}