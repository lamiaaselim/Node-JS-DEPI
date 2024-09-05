class Car {

    constructor (type, model) {
        this.type = type;
        this.model = model;
    }

    pringInfo() {
        console.log( this.model + " " + this.type)
    }
}


//case1
module.exports.Car=Car;

//module2 case1
// const CarModule = require("./carModule");
// new CarModule.Car()

// const {Car} = require("./CarModule");
// new Car();


//mdoule2 case2 defualt export
module.exports=Car;
const carModule = require("")
new carModule();