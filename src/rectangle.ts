class Rectangle{
    length:number;
    width:number;
    constructor(length:number, width:number){
        this.length = length;
        this.width = width;
    }

    area():number{
        return this.length * this.width;
    }
}