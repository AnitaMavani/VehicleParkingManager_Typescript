"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle(id, vehicleName, vehicleType, vehicleOwner) {
        this.id = id;
        this.vehicleName = vehicleName;
        this.vehicleType = vehicleType;
        this.vehicleOwner = vehicleOwner;
    }
    Vehicle.prototype.drive = function () {
        console.log("".concat(this.vehicleOwner.name, " is driving ").concat(this.vehicleName, ", vehicleId ").concat(this.id, " and type is ").concat(this.vehicleType));
    };
    return Vehicle;
}());
exports.default = Vehicle;
