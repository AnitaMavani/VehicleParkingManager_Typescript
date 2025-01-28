"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParkingCharge = /** @class */ (function () {
    function ParkingCharge() {
    }
    ParkingCharge.prototype.calculate = function (parkingSpot, startTime, endTime) {
        var regularCharge = 30;
        var extracharge = regularCharge + 30;
        var differenceInMilliseconds = endTime.getTime() - startTime.getTime();
        // Convert milliseconds to hours
        var differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
        if (differenceInHours > 1) {
            console.log("parking spot: ".concat(parkingSpot.id, " , starttime: ").concat(startTime.toLocaleString(), ", endtime: ").concat(endTime.toLocaleString()));
            return extracharge;
        }
        else {
            console.log("parking spot: ".concat(parkingSpot.id, " , starttime: ").concat(startTime, ", endtime: ").concat(endTime));
            return regularCharge;
        }
    };
    return ParkingCharge;
}());
exports.default = ParkingCharge;
