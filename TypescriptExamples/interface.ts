interface Playwrigh{
    openApplication() : void;
    closeApplication : void;
}

interface Selenium{
    openApplication() : void;
    closeApplication() : void;
}


class chrome{
    openApplication() : void{
        console.log("Chrome application opened");
    }


    closeApplication() : void{
        console.log("Chrome application closed");
    }
}

class firefox{
    openApplication() : void{
        console.log("Firefox application opened");
    }

    closeApplication() : void{
        console.log("Firefox application closed")
    }
}

let ch = new chrome();
ch.openApplication();
ch.closeApplication();


let fx = new firefox();
fx.openApplication();
fx.closeApplication();