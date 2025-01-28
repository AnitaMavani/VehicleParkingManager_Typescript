import VehicleOwner from "./VehicleOwner";
import { PaymentMethod } from "./paymentMethod2";
import ParkingSpotAssignment from "./parkingSpotAssignment";
import PdfRender from "./pdfRender";

class Invoice {
    constructor(public parkingSpot: ParkingSpotAssignment, public amount: number) {
    }
    printInvoice() {
        const rows = [
            ['Vehicle', this.parkingSpot.vehicle.vehicleName],
            ['Spot', this.parkingSpot.spotNumber.toString()],
            ['Start Time', this.parkingSpot.startTime.toLocaleDateString()],
            ['End Time', this.parkingSpot.endTime.toLocaleDateString()],
            ['Amount', this.amount.toFixed()],
        ];
        const invoiceRender = new PdfRender();
        invoiceRender.render(rows);
        return true;
    }
}

export default Invoice;



