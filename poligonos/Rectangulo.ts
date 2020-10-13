class Rectangulo{
    private base: number
    private altura:number

    public constructor(base : number, altura:number){
        this.base = base
        this.altura = altura
    }

    public getBase(){
        return this.base
    }

    public getAltura(){
        return this.altura
    }

    public getPerimetro(){
        return this.base*2+this.altura*2
    }

    public getArea(){
        return (this.base*this.altura)
    }

}
export{Rectangulo}