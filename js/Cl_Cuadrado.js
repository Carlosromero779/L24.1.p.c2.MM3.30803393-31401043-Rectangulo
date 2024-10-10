export default class Cl_Cuadrado {
    constructor(base){
        this.base = base;
    }
    set base(base){
        this._base = base;
    }
    get base(){
        return this._base
    }
    area(){
        return this.base*2
    }
    perimetro(){
        return this.base*4
    }
}