"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleToParkingSpot = void 0;
var constants_js_1 = require("./constants.js");
var vehicleToParkingSpot = function (vehicleType) {
    return constants_js_1.VEHICLE_PARKING_SPOT_TYPES[vehicleType];
};
exports.vehicleToParkingSpot = vehicleToParkingSpot;
