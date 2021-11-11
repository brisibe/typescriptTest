import { Bike, Truck, Car } from "./ShippingVehicles";

enum Size {
    SMALL = 100,
    MEDIUM = 400,
}

class Logistics {

    private name: string
    private weight: number
    private vehicle: Car | Bike | Truck

    constructor(name: string, weight: number) {
        this.name = name
        this.weight = weight
    }

    private greeting() {
        console.log(`welcome to Conclase logistics, your package ${this.name} is being processed.`)
    }


    dispatch() {
        this.greeting();

        if (this.weight <= Size.SMALL) {
            this.vehicle = new Bike()
        }
        else if (this.weight > Size.SMALL && this.weight < Size.MEDIUM) {
            this.vehicle = new Car()
        } else if (this.weight > Size.MEDIUM) {
            this.vehicle = new Truck()
        }

        this.vehicle.dispatchPackage()
    }

}


// entry
const dispatchPackage = (name: string, weight: number) => {

    let logistics = new Logistics(name, weight);
    return logistics.dispatch()
}

dispatchPackage("Jollof", 500)





