class A{
    a = 20;
    b = 30;

    m1() : void {
        console.log("M1 method executed");
    }
}

class B extends A{
    x = 50;
    y = 60;

    m2() : void{
        console.log("M2 method executed");
        console.log(this.a + this.b);

    }
}


class C extends B{
    m3() : void {
        console.log("M3 method executed")
        console.log(this.x + this.y); //accessing from class a
        console.log(this.a + this.b); //accessing from class b
    }
}

let obj = new C;
obj.m1();
obj.m2();
obj.m3();