"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParkingSpotAssignment = /** @class */ (function () {
    function ParkingSpotAssignment(vehicle, spotNumber, spotType, startTime, endTime) {
        this.vehicle = vehicle;
        this.spotNumber = spotNumber;
        this.spotType = spotType;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    ParkingSpotAssignment.prototype.detail = function () {
        console.log("Parking Spot ".concat(this.spotNumber, ", Spot Type : ").concat(this.spotType, " assigned to vehicle Number : ").concat(this.vehicle.id, " at ").concat(this.startTime.toLocaleString(), " untill ").concat(this.endTime.toLocaleString()));
    };
    return ParkingSpotAssignment;
}());
exports.default = ParkingSpotAssignment;
