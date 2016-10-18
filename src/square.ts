class Square extends Rectangle{
    constructor(public length:number){
        super(length,length);
    }

    get perimeter():number {
        return this.length * 4;
    }
   
}

var sq = new Square(5);
var perimeter = sq.perimeter;
var area = sq.area();

function showResult(){
   toastr.info(`Perimeter is ${perimeter} and Area is ${area}`);
}
