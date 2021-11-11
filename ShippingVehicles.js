"use strict";
exports.__esModule = true;
exports.Truck = exports.Car = exports.Bike = void 0;
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.dispatchPackage = function () {
        console.log("Your package will be delivered with a Bike");
    };
    ;
    return Bike;
}());
exports.Bike = Bike;
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.dispatchPackage = function () {
        console.log("Your package will be delivered with a Car");
    };
    ;
    return Car;
}());
exports.Car = Car;
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.dispatchPackage = function () {
        console.log("Your package will be delivered with a Truck");
    };
    ;
    return Truck;
}());
exports.Truck = Truck;
