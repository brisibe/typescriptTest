"use strict";
exports.__esModule = true;
var ShippingVehicles_1 = require("./ShippingVehicles");
var Size;
(function (Size) {
    Size[Size["SMALL"] = 100] = "SMALL";
    Size[Size["MEDIUM"] = 400] = "MEDIUM";
})(Size || (Size = {}));
var Logistics = /** @class */ (function () {
    function Logistics(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    Logistics.prototype.greeting = function () {
        console.log("welcome to Conclase logistics, your package is being processed.");
    };
    Logistics.prototype.dispatch = function () {
        this.greeting();
        if (this.weight <= Size.SMALL) {
            this.vehicle = new ShippingVehicles_1.Bike();
        }
        else if (this.weight > Size.SMALL && this.weight < Size.MEDIUM) {
            this.vehicle = new ShippingVehicles_1.Car();
        }
        else if (this.weight > Size.MEDIUM) {
            this.vehicle = new ShippingVehicles_1.Truck();
        }
        this.vehicle.dispatchPackage();
    };
    return Logistics;
}());
// entry
var dispatchPackage = function (name, weight) {
    var logistics = new Logistics(name, weight);
    if (!logistics) {
        logistics = new Logistics(name, weight);
        console.log("new log");
    }
    else {
        console.log("old log");
        return logistics.dispatch();
    }
    return logistics.dispatch();
};
dispatchPackage("Jollof", 500);
