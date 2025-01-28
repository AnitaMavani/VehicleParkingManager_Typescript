import ParkingSpot from "./parkingSpot";

class ParkingCharge {
    constructor() {
    }

    calculate(parkingSpot: ParkingSpot, startTime: Date, endTime: Date) {
        const regularCharge = 30;
        let extracharge = regularCharge + 30;
        const differenceInMilliseconds = endTime.getTime() - startTime.getTime();
        // Convert milliseconds to hours
        const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
        if (differenceInHours > 1) {
            console.log(`parking spot: ${parkingSpot.id} , starttime: ${startTime.toLocaleString()}, endtime: ${endTime.toLocaleString()}`);
            return extracharge;
        }
        else {
            console.log(`parking spot: ${parkingSpot.id} , starttime: ${startTime}, endtime: ${endTime}`);
            return regularCharge;
        }
    }
}

export default ParkingCharge;

