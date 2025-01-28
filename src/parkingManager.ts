import { PARKING_SPOT_TYPE_BIKE, PARKING_SPOT_TYPE_COMPACT, PARKING_SPOT_TYPE_LARGE } from "./constants.js";
import ParkingCharge from "./parkingCharge.js";
import ParkingSpot from "./parkingSpot.js";
import Vehicle from "./vehicle.js";
import { vehicleToParkingSpot } from "./utils.js";
import PaymentManager from "./paymentManager.js";
import VehicleOwner from "./VehicleOwner";
//import ParkingSpotAssignment from "./parkingSpotAssignment";
import Invoice from "./invoice";
import ParkingSpotAssignment from "./parkingSpotAssignment";

class ParkingManager {
    availableSpots: Record<string, ParkingSpot[]>;
    occupiedSpots: Record<number, { spot: ParkingSpot, startTime: Date, endTime: Date, charge: number }>;
    chargeManager: ParkingCharge;
    paymentManager: PaymentManager;
    invoice: Invoice;
    parkingAssign: ParkingSpotAssignment;
    constructor() {
        this.availableSpots = {
            [PARKING_SPOT_TYPE_BIKE]: [
                new ParkingSpot(1, 1, PARKING_SPOT_TYPE_BIKE),
                new ParkingSpot(2, 2, PARKING_SPOT_TYPE_BIKE),
                new ParkingSpot(3, 3, PARKING_SPOT_TYPE_BIKE),
            ],
            [PARKING_SPOT_TYPE_COMPACT]: [
                new ParkingSpot(4, 4, PARKING_SPOT_TYPE_COMPACT),
                new ParkingSpot(5, 5, PARKING_SPOT_TYPE_COMPACT),
            ],
            [PARKING_SPOT_TYPE_LARGE]: [
                new ParkingSpot(9, 9, PARKING_SPOT_TYPE_LARGE),
                new ParkingSpot(10, 10, PARKING_SPOT_TYPE_LARGE),
            ],
        };
        this.occupiedSpots = {};
        this.chargeManager = new ParkingCharge();
        this.paymentManager = new PaymentManager();
    }

    parkVehicle(vehicle: Vehicle, startTime: Date, endTime: Date) {
        const parkingSpot = vehicleToParkingSpot(vehicle.vehicleType);
        if (!parkingSpot) {
            return "No parking spot available";
        }

        const availableSpot = this.availableSpots[parkingSpot]?.[0];
        if (!availableSpot) {
            return "No parking spot available";
        }

        // Charge the customer
        const charge = this.chargeManager.calculate(availableSpot, startTime, endTime);
        console.log(`The charge ${vehicle.vehicleOwner.name} need to pay is $${charge} for ${vehicle.vehicleName}`);
        console.log("");

        //payment
        const isPaid = this.paymentManager.process(vehicle.vehicleOwner, charge, vehicle.vehicleOwner.paymentMethod);
        if (!isPaid) {
            return "Payment failed";
        }

        availableSpot.markOccupied();
        // TODO - Move to new class called "ParkingSpotAssignment"
        this.occupiedSpots[vehicle.id] = { "spot": availableSpot, startTime, endTime, charge };
        this.availableSpots[parkingSpot] = this.availableSpots[parkingSpot].filter((s) => s.id !== availableSpot.id);

        //Parkingspotassignment
        this.parkingAssign = new ParkingSpotAssignment(vehicle, availableSpot.spotNumber, availableSpot.spotType, startTime, endTime);
        this.parkingAssign.detail();

        //Generate Invoice
        this.invoice = new Invoice(this.parkingAssign, charge);
        const generateInvoice = this.invoice.printInvoice();
        if (!generateInvoice) {
            return `failes to generate invoice`;
        }
        console.log(`Invoice generated for ${vehicle.vehicleOwner.name} successfully`);

        return `Vehicle ${vehicle.vehicleName} is parked on spot ${availableSpot.spotNumber}`;

    }


    exitVehicle(vehicle: Vehicle, endTime: Date) {
        const occupiedSpotInfo = this.occupiedSpots[vehicle.id];
        if (!occupiedSpotInfo) {
            return `Vehicle ${vehicle.vehicleName} was not parked`;
        }

        // if endtime exceeds
        // TODO

        const occupiedSpot = occupiedSpotInfo["spot"];
        occupiedSpot.markAvailable();
        delete this.occupiedSpots[vehicle.id];
        this.availableSpots[occupiedSpot.spotType] = [...this.availableSpots[occupiedSpot.spotType], occupiedSpot];
        return `Vehicle ${vehicle.vehicleName} is released from spot ${occupiedSpot.spotNumber} at ${endTime.toLocaleString()}`;
    }

}
export default ParkingManager;