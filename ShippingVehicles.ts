export interface IShipping {
    dispatchPackage()
}


export class Bike implements IShipping {
    dispatchPackage() {
        console.log("Your package will be delivered with a Bike")
    };
}

export class Car implements IShipping {
    dispatchPackage() {
        console.log("Your package will be delivered with a Car")
    };
}

export class Truck implements IShipping {
    dispatchPackage() {
        console.log("Your package will be delivered with a Truck")
    };
}