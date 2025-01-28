
export class PaymentMethod {
    constructor() {
    }

    pay(paymentAmt: number) {
        throw "Unimplemented method"
    }

    balance() {
        throw "Unimplemented method"
    }

}

export class Creditcard extends PaymentMethod {
    cardNumber: string;
    expiryDate: Date;
    availableBal: number;
    cvv: number;

    constructor(cardNumber: string, expiryDate: Date, cvv: number, balance: number) {
        super();
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.availableBal = balance;
        this.cvv = cvv;
    }

    pay(paymentAmt: number): boolean {
        this.availableBal -= paymentAmt;
        console.log(`Payment is successful using card ${this.cardNumber}. Updated balance: ${this.availableBal}`);
        return true;
    }

    balance(): void {
        console.log(`Card Number: ${this.cardNumber}, available balance: ${this.availableBal}`);
    }
}

export class Bank extends PaymentMethod {
    accountName: string;
    accountNumber: string;
    availableBal: number;

    constructor(accountNumber: string, accountName: string, balance: number) {
        super();
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.availableBal = balance;
    }

    pay(paymentAmt: number) {
        this.availableBal -= paymentAmt;
        console.log(`Payment is successful using account ${this.accountNumber}. Updated balance: ${this.availableBal}`);
        return true;
    }

    balance() {
        console.log(`Bank Account: ${this.accountNumber}, available balance: ${this.availableBal}`);
    }
}


