class Address{

    public Location : string = "Amit Plaza";
    private City : string = "Hadapsar";
    protected Taluka : string = "Haveli";


    live() : void {
        console.log(this.Location);
        console.log(this.City);
        console.log(this.Taluka);
    }
}

let obj = new Address
obj.live();

console.log(obj.Location);
// console.log(obj.City);
// console.log(obj.Taluka);