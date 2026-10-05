class encap{
    //data types & variables
    Name : string = "Shubhada Tilekar";
    Location : string = "Pune";
    Taluka : string = "Haveli";

    //methods
    Address() : void {
        console.log(this.Name);
        console.log(this.Location);
        console.log(this.Taluka);
    }
}

let obj1 = new encap();
obj1.Address();