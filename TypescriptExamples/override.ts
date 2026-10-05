class override{
    add(a:number, b:number) : void{
        console.log(a + b);
        console.log("old functionality");
    }
}

class override1 extends override {
    add(a:number , b:number) : void{
        console.log(a - b);
        console.log("new functionality");
    }
}

let obj = new override1();
obj.add(10,20);