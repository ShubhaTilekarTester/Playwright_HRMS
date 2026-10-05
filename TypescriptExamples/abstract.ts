abstract class RBI{
   abstract credit() : void;
   abstract debit() : void;
}


class HDFC{
    credit() : void{
        console.log("HDFC Credit");
      
    }

    debit() : void{
        console.log("HDFC Debit ");
    }
}

class SBI{
    credit() : void{
        console.log("SBI Credit");
    }

    debit() : void{
        console.log("HDFC debit");
    }
}

let ab = new HDFC();
ab.credit();
ab.debit();

let sbi = new SBI();
sbi.credit();
sbi.debit();