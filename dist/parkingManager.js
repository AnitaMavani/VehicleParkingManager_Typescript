"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_js_1 = require("./constants.js");
var parkingCharge_js_1 = require("./parkingCharge.js");
var parkingSpot_js_1 = require("./parkingSpot.js");
var utils_js_1 = require("./utils.js");
var paymentManager_js_1 = require("./paymentManager.js");
//import ParkingSpotAssignment from "./parkingSpotAssignment";
var invoice_1 = require("./invoice");
var parkingSpotAssignment_1 = require("./parkingSpotAssignment");
var ParkingManager = /** @class */ (function () {
    function ParkingManager() {
        var _a;
        this.availableSpots = (_a = {},
            _a[constants_js_1.PARKING_SPOT_TYPE_BIKE] = [
                new parkingSpot_js_1.default(1, 1, constants_js_1.PARKING_SPOT_TYPE_BIKE),
                new parkingSpot_js_1.default(2, 2, constants_js_1.PARKING_SPOT_TYPE_BIKE),
                new parkingSpot_js_1.default(3, 3, constants_js_1.PARKING_SPOT_TYPE_BIKE),
            ],
            _a[constants_js_1.PARKING_SPOT_TYPE_COMPACT] = [
                new parkingSpot_js_1.default(4, 4, constants_js_1.PARKING_SPOT_TYPE_COMPACT),
                new parkingSpot_js_1.default(5, 5, constants_js_1.PARKING_SPOT_TYPE_COMPACT),
            ],
            _a[constants_js_1.PARKING_SPOT_TYPE_LARGE] = [
                new parkingSpot_js_1.default(9, 9, constants_js_1.PARKING_SPOT_TYPE_LARGE),
                new parkingSpot_js_1.default(10, 10, constants_js_1.PARKING_SPOT_TYPE_LARGE),
            ],
            _a);
        this.occupiedSpots = {};
        this.chargeManager = new parkingCharge_js_1.default();
        this.paymentManager = new paymentManager_js_1.default();
    }
    ParkingManager.prototype.parkVehicle = function (vehicle, startTime, endTime) {
        var _a;
        var parkingSpot = (0, utils_js_1.vehicleToParkingSpot)(vehicle.vehicleType);
        if (!parkingSpot) {
            return "No parking spot available";
        }
        var availableSpot = (_a = this.availableSpots[parkingSpot]) === null || _a === void 0 ? void 0 : _a[0];
        if (!availableSpot) {
            return "No parking spot available";
        }
        // Charge the customer
        var charge = this.chargeManager.calculate(availableSpot, startTime, endTime);
        console.log("The charge ".concat(vehicle.vehicleOwner.name, " need to pay is $").concat(charge, " for ").concat(vehicle.vehicleName));
        console.log("");
        //payment
        var isPaid = this.paymentManager.process(vehicle.vehicleOwner, charge, vehicle.vehicleOwner.paymentMethod);
        if (!isPaid) {
            return "Payment failed";
        }
        availableSpot.markOccupied();
        // TODO - Move to new class called "ParkingSpotAssignment"
        this.occupiedSpots[vehicle.id] = { "spot": availableSpot, startTime: startTime, endTime: endTime, charge: charge };
        this.availableSpots[parkingSpot] = this.availableSpots[parkingSpot].filter(function (s) { return s.id !== availableSpot.id; });
        //Parkingspotassignment
        this.parkingAssign = new parkingSpotAssignment_1.default(vehicle, availableSpot.spotNumber, availableSpot.spotType, startTime, endTime);
        this.parkingAssign.detail();
        //Generate Invoice
        this.invoice = new invoice_1.default(this.parkingAssign, charge);
        var generateInvoice = this.invoice.printInvoice();
        if (!generateInvoice) {
            return "failes to generate invoice";
        }
        console.log("Invoice generated for ".concat(vehicle.vehicleOwner.name, " successfully"));
        return "Vehicle ".concat(vehicle.vehicleName, " is parked on spot ").concat(availableSpot.spotNumber);
    };
    ParkingManager.prototype.exitVehicle = function (vehicle, endTime) {
        var occupiedSpotInfo = this.occupiedSpots[vehicle.id];
        if (!occupiedSpotInfo) {
            return "Vehicle ".concat(vehicle.vehicleName, " was not parked");
        }
        // if endtime exceeds
        // TODO
        var occupiedSpot = occupiedSpotInfo["spot"];
        occupiedSpot.markAvailable();
        delete this.occupiedSpots[vehicle.id];
        this.availableSpots[occupiedSpot.spotType] = __spreadArray(__spreadArray([], this.availableSpots[occupiedSpot.spotType], true), [occupiedSpot], false);
        return "Vehicle ".concat(vehicle.vehicleName, " is released from spot ").concat(occupiedSpot.spotNumber, " at ").concat(endTime.toLocaleString());
    };
    return ParkingManager;
}());
exports.default = ParkingManager;
