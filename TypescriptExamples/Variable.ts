class Exp_Var{

    b : number = 1997; //instance variable

    static c : number = 1998; //static variable

    m1() : void{
        let a : number = 1996; //local variable
        console.log("m1 method executed");
        console.log( a , "is a local variable");
    }

    m2() : void{
        console.log("M2 method executed");
        console.log(this.b , "is a instance variable")
    }

    m3() : void{
        console.log("M3 method executed")
        console.log(Exp_Var.c , "is a static variable");
    }


    static m4() : void{
        console.log("m4 method executed");         //static method
    }
}


// non static - access using object
let z = new Exp_Var();
z.m1();
z.m2();
z.m3();




//static - does not require object
Exp_Var.m4();  