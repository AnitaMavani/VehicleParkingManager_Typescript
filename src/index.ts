import Vehicle from "./vehicle";
import ParkingSpot from "./parkingSpot";
import ParkingManager from "./parkingManager";
import { PAYMENT_TYPE_BANK, PAYMENT_TYPE_CC, VEHICLE_TYPE_TRUCK, VEHICLE_TYPE_CAR, VEHICLE_TYPE_BIKE, PARKING_SPOT_TYPE_BIKE, PARKING_SPOT_TYPE_COMPACT, PARKING_SPOT_TYPE_LARGE } from "./constants";
import VehicleOwner from "./VehicleOwner";
import { PaymentMethod, Creditcard, Bank } from "./paymentMethod2";
//import { Creditcard } from "./paymentMethod";

//parking manager
const parkingManager = new ParkingManager();

//owner1 with card payment method
const ownerCard = new Creditcard("1234567890123456", new Date(), 287, 500);
const owner1 = new VehicleOwner(1, "Anita", ownerCard);
console.log(owner1.name);
console.log(owner1.paymentMethod.balance());
console.log("");

//owner2 with bank payment method
const ownerBank = new Bank("8457438548674", "Ms kokila modi", 1000);
const owner2 = new VehicleOwner(2, "Kokila", ownerBank);
console.log(owner2.name);
console.log(owner2.paymentMethod.balance());
console.log("");

//vehicle1, owner1
const vehicle1 = new Vehicle(101, "CRV", VEHICLE_TYPE_TRUCK, owner1);
vehicle1.drive();
console.log("");

//park vehicle1
const parkVehicle1 = parkingManager.parkVehicle(vehicle1, new Date('2024-10-18T12:00:00'), new Date('2024-10-18T15:30:00'));
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

