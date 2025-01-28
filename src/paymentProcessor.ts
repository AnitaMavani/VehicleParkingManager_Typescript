import { PaymentMethod, Creditcard, Bank } from "./paymentMethod2";
import VehicleOwner from "./VehicleOwner";
export class PaymentProcessor {

    constructor() {
    }

    processPayment(paymentMethod: PaymentMethod, amount: number) {
        throw "Unimplemented Method";
    }

}



export class CreditCardProcessor extends PaymentProcessor {
    constructor() {
        super();
    }

    processPayment(paymentMethod: Creditcard, amount: number) {
        let paymentMethodBalance = paymentMethod.balance();
        paymentMethodBalance -= amount;
        paymentMethod.availableBal = paymentMethodBalance;
        console.log(`Charging the card: ${paymentMethod.cardNumber} for amount ${amount}`);
        return true;
    }

}

export class BankProcessor extends PaymentProcessor {
    constructor() {
        super();
    }

    processPayment(paymentMethod: Bank, amount: number) {
        let paymentMethodBalance = paymentMethod.balance();
        paymentMethodBalance -= amount;
        paymentMethod.availableBal = paymentMethodBalance;
        console.log(`Charging the card: ${paymentMethod.accountNumber} for amount ${amount}`);
        return true;
    }
}
