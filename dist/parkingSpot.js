"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParkingSpot = /** @class */ (function () {
    function ParkingSpot(id, spotNumber, spotType) {
        this.id = id;
        this.spotNumber = spotNumber;
        this.spotType = spotType;
        this.occupied = false;
    }
    ParkingSpot.prototype.markOccupied = function () {
        this.occupied = true;
    };
    ParkingSpot.prototype.markAvailable = function () {
        this.occupied = false;
    };
    ParkingSpot.prototype.availableSpots = function () {
        if (!this.occupied) {
            console.log("Available spot : spotNumber: ".concat(this.spotNumber, ", spotType: ").concat(this.spotType));
        }
        else {
            console.log("spotNumber: ".concat(this.spotNumber, " of type ").concat(this.spotType, " is not Available"));
        }
    };
    return ParkingSpot;
}());
exports.default = ParkingSpot;
