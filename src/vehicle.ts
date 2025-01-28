
import VehicleOwner from "./VehicleOwner";

class Vehicle {
    id: number;
    vehicleName: string;
    vehicleType: string;
    vehicleOwner: VehicleOwner;
    constructor(id: number, vehicleName: string, vehicleType: string, vehicleOwner: VehicleOwner) {
        this.id = id;
        this.vehicleName = vehicleName;
        this.vehicleType = vehicleType;
        this.vehicleOwner = vehicleOwner;
    }

    drive() {
        console.log(`${this.vehicleOwner.name} is driving ${this.vehicleName}, vehicleId ${this.id} and type is ${this.vehicleType}`);
    }
}

export default Vehicle;

