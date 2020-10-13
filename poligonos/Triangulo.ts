class Triangulo{
    private base: number
    private lado2: number
    private lado3: number
    private altura: number

    public constructor(base : number, lado2 : number ,lado3 : number ,altura : number){
        this.base = base
        this.lado2 = lado2
        this.lado3 = lado3
        this.altura = altura
    }

    public getBase(){
        return this.base
    }

    public getLado2(){
        return this.lado2
    }

    public getLado3(){
        return this.lado3
    }

    public getAltura(){
        return this.altura
    }

    public getPerimetro(){
        return this.base+this.lado2+this.lado3
    }

    public getArea(){
        return (this.base*this.altura)/2
    }

}
export{Triangulo}