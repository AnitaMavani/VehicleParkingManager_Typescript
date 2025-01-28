"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankProcessor = exports.CreditCardProcessor = exports.PaymentProcessor = void 0;
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor() {
    }
    PaymentProcessor.prototype.processPayment = function (paymentMethod, amount) {
        throw "Unimplemented Method";
    };
    return PaymentProcessor;
}());
exports.PaymentProcessor = PaymentProcessor;
var CreditCardProcessor = /** @class */ (function (_super) {
    __extends(CreditCardProcessor, _super);
    function CreditCardProcessor() {
        return _super.call(this) || this;
    }
    CreditCardProcessor.prototype.processPayment = function (paymentMethod, amount) {
        var paymentMethodBalance = paymentMethod.balance();
        paymentMethodBalance -= amount;
        paymentMethod.availableBal = paymentMethodBalance;
        console.log("Charging the card: ".concat(paymentMethod.cardNumber, " for amount ").concat(amount));
        return true;
    };
    return CreditCardProcessor;
}(PaymentProcessor));
exports.CreditCardProcessor = CreditCardProcessor;
var BankProcessor = /** @class */ (function (_super) {
    __extends(BankProcessor, _super);
    function BankProcessor() {
        return _super.call(this) || this;
    }
    BankProcessor.prototype.processPayment = function (paymentMethod, amount) {
        var paymentMethodBalance = paymentMethod.balance();
        paymentMethodBalance -= amount;
        paymentMethod.availableBal = paymentMethodBalance;
        console.log("Charging the card: ".concat(paymentMethod.accountNumber, " for amount ").concat(amount));
        return true;
    };
    return BankProcessor;
}(PaymentProcessor));
exports.BankProcessor = BankProcessor;
