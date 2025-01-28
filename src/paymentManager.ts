import VehicleOwner from "./VehicleOwner";
import { Creditcard, Bank, PaymentMethod } from "./paymentMethod2";
import { PaymentProcessor, CreditCardProcessor, BankProcessor } from "./paymentProcessor";
import { PAYMENT_TYPE_CC, PAYMENT_TYPE_BANK } from "./constants";


class PaymentManager {
    registeredProcessor: Record<string, PaymentProcessor>;
    processPay: PaymentProcessor;
    constructor() {
        this.registeredProcessor = {
            [PAYMENT_TYPE_CC]: new CreditCardProcessor(),
            [PAYMENT_TYPE_BANK]: new BankProcessor(),
        }
        this.processPay = new PaymentProcessor();
    }

    process(owner: VehicleOwner, amount: number, paymentMethod: PaymentMethod): boolean {
        const paymentMethodType = owner.paymentMethod.type;
        const processor = this.registeredProcessor[paymentMethodType];

        if (!processor) {
            throw "Not supported payment method";
        }
        processor.processPayment(paymentMethod, amount);
        return true;
    }

}

export default PaymentManager;

