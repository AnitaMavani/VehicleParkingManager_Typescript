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
exports.Bank = exports.Creditcard = exports.PaymentMethod = void 0;
var PaymentMethod = /** @class */ (function () {
    function PaymentMethod() {
    }
    PaymentMethod.prototype.pay = function (paymentAmt) {
        throw "Unimplemented method";
    };
    PaymentMethod.prototype.balance = function () {
        throw "Unimplemented method";
    };
    return PaymentMethod;
}());
exports.PaymentMethod = PaymentMethod;
var Creditcard = /** @class */ (function (_super) {
    __extends(Creditcard, _super);
    function Creditcard(cardNumber, expiryDate, cvv, balance) {
        var _this = _super.call(this) || this;
        _this.cardNumber = cardNumber;
        _this.expiryDate = expiryDate;
        _this.availableBal = balance;
        _this.cvv = cvv;
        return _this;
    }
    Creditcard.prototype.pay = function (paymentAmt) {
        this.availableBal -= paymentAmt;
        console.log("Payment is successful using card ".concat(this.cardNumber, ". Updated balance: ").concat(this.availableBal));
        return true;
    };
    Creditcard.prototype.balance = function () {
        console.log("Card Number: ".concat(this.cardNumber, ", available balance: ").concat(this.availableBal));
    };
    return Creditcard;
}(PaymentMethod));
exports.Creditcard = Creditcard;
var Bank = /** @class */ (function (_super) {
    __extends(Bank, _super);
    function Bank(accountNumber, accountName, balance) {
        var _this = _super.call(this) || this;
        _this.accountName = accountName;
        _this.accountNumber = accountNumber;
        _this.availableBal = balance;
        return _this;
    }
    Bank.prototype.pay = function (paymentAmt) {
        this.availableBal -= paymentAmt;
        console.log("Payment is successful using account ".concat(this.accountNumber, ". Updated balance: ").concat(this.availableBal));
        return true;
    };
    Bank.prototype.balance = function () {
        console.log("Bank Account: ".concat(this.accountNumber, ", available balance: ").concat(this.availableBal));
    };
    return Bank;
}(PaymentMethod));
exports.Bank = Bank;
