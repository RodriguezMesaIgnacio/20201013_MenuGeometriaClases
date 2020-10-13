class Cuadrado{
    private lado: number

    public constructor(lado : number){
        this.lado = lado
    }

    public getLado(){
        return this.lado
    }

    public getPerimetro(){
        return this.lado*4
    }

    public getArea(){
        return (this.lado*this.lado)
    }

}
export{Cuadrado}