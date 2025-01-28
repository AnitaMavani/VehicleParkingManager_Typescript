
class ParkingSpot {
    id: number;
    spotNumber: number;
    spotType: string;
    occupied: boolean;

    constructor(id: number, spotNumber: number, spotType: string) {
        this.id = id;
        this.spotNumber = spotNumber;
        this.spotType = spotType;
        this.occupied = false;
    }

    markOccupied(): void {
        this.occupied = true;
    }

    markAvailable() {
        this.occupied = false;
    }
    availableSpots() {
        if (!this.occupied) {
            console.log(`Available spot : spotNumber: ${this.spotNumber}, spotType: ${this.spotType}`);
        }
        else {
            console.log(`spotNumber: ${this.spotNumber} of type ${this.spotType} is not Available`);
        }
    }
}

export default ParkingSpot;

