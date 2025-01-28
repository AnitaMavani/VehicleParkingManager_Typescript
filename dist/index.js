"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vehicle_1 = require("./vehicle");
var parkingManager_1 = require("./parkingManager");
var constants_1 = require("./constants");
var VehicleOwner_1 = require("./VehicleOwner");
var paymentMethod2_1 = require("./paymentMethod2");
//import { Creditcard } from "./paymentMethod";
//parking manager
var parkingManager = new parkingManager_1.default();
//owner1 with card payment method
var ownerCard = new paymentMethod2_1.Creditcard("1234567890123456", new Date(), 287, 500);
var owner1 = new VehicleOwner_1.default(1, "Anita", ownerCard);
console.log(owner1.name);
console.log(owner1.paymentMethod.balance());
console.log("");
//owner2 with bank payment method
var ownerBank = new paymentMethod2_1.Bank("8457438548674", "Ms kokila modi", 1000);
var owner2 = new VehicleOwner_1.default(2, "Kokila", ownerBank);
console.log(owner2.name);
console.log(owner2.paymentMethod.balance());
console.log("");
//vehicle1, owner1
var vehicle1 = new vehicle_1.default(101, "CRV", constants_1.VEHICLE_TYPE_TRUCK, owner1);
vehicle1.drive();
console.log("");
//park vehicle1
var parkVehicle1 = parkingManager.parkVehicle(vehicle1, new Date('2024-10-18T12:00:00'), new Date('2024-10-18T15:30:00'));
console.log(parkVehicle1);
//exit vehicle
console.log(parkingManager.exitVehicle(vehicle1, new Date('2024-10-18T15:30:00')));
// //vehicle2
// console.log("");
// const vehicle2 = new Vehicle(102, "SUV", VEHICLE_TYPE_CAR, owner2);
// vehicle2.drive();
// console.log("");
// const parkVehicle2 = parkingManager.parkVehicle(vehicle2, new Date('2024-10-18T15:00:00'), new Date('2024-10-18T16:00:00'));
// console.log(parkVehicle2);
// //exit vehicle
// console.log(parkingManager.exitVehicle(vehicle2, new Date('2024-10-18T16:30:00')));
// //
// console.log("");
// console.log("parking again");
// console.log(owner2.name);
// console.log(owner2.paymentMethod.balance());
// const parkVehicle3 = parkingManager.parkVehicle(vehicle2, new Date('2024-10-18T18:00:00'), new Date('2024-10-18T19:00:00'));
// console.log(parkVehicle3);
