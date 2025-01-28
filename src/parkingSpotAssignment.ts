import ParkingSpot from "./parkingSpot";
import Vehicle from "./vehicle";
class ParkingSpotAssignment {
    constructor(public vehicle: Vehicle, public spotNumber: number, public spotType: string, public startTime: Date, public endTime: Date) {
    }
    detail() {
        console.log(`Parking Spot ${this.spotNumber}, Spot Type : ${this.spotType} assigned to vehicle Number : ${this.vehicle.id} at ${this.startTime.toLocaleString()} untill ${this.endTime.toLocaleString()}`);
    }
}

export default ParkingSpotAssignment;