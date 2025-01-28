import { PaymentMethod } from "./paymentMethod2";

class VehicleOwner {

    constructor(public id: number, public name: string, public paymentMethod: PaymentMethod) {
    }

}

export default VehicleOwner;

