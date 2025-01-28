import VehicleOwner from "./VehicleOwner";
import { PAYMENT_TYPE_BANK, PAYMENT_TYPE_CC, PaymentMethodType } from "./constants";
export class PaymentMethod {
    type: string;

    constructor(type: PaymentMethodType) {
        this.type = type;
    }

    pay(paymentAmt: number) {
        throw "Unimplemented method"
    }

    balance() {
        throw "Unimplemented method"
    }

}

export class Creditcard extends PaymentMethod {
    constructor(public cardNumber: string, public expiryDate: Date, public cvv: number, public availableBal: number) {
        super(PAYMENT_TYPE_CC);
    }

    // pay(paymentAmt: number) {

    //     this.availableBal -= paymentAmt;
    //     console.log(`Payment is successful using card ${this.cardNumber}. Updated balance: ${this.availableBal}`);
    //     console.log("");
    //     return true;
    // }

    balance() {
        return this.availableBal;
    }
}

export class Bank extends PaymentMethod {
    constructor(public accountNumber: string, public accountName: string, public availableBal: number) {
        super(PAYMENT_TYPE_BANK);
    }

    // pay(paymentAmt: number) {
    //     this.availableBal -= paymentAmt;
    //     console.log(`Payment is successful using account ${this.accountNumber}. Updated balance: ${this.availableBal}`);
    //     console.log("");
    //     return true;
    // }

    balance() {
        return this.availableBal;
    }
}


