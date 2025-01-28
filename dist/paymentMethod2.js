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
var constants_1 = require("./constants");
var PaymentMethod = /** @class */ (function () {
    function PaymentMethod(type) {
        this.type = type;
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
    function Creditcard(cardNumber, expiryDate, cvv, availableBal) {
        var _this = _super.call(this, constants_1.PAYMENT_TYPE_CC) || this;
        _this.cardNumber = cardNumber;
        _this.expiryDate = expiryDate;
        _this.cvv = cvv;
        _this.availableBal = availableBal;
        return _this;
    }
    // pay(paymentAmt: number) {
    //     this.availableBal -= paymentAmt;
    //     console.log(`Payment is successful using card ${this.cardNumber}. Updated balance: ${this.availableBal}`);
    //     console.log("");
    //     return true;
    // }
    Creditcard.prototype.balance = function () {
        return this.availableBal;
    };
    return Creditcard;
}(PaymentMethod));
exports.Creditcard = Creditcard;
var Bank = /** @class */ (function (_super) {
    __extends(Bank, _super);
    function Bank(accountNumber, accountName, availableBal) {
        var _this = _super.call(this, constants_1.PAYMENT_TYPE_BANK) || this;
        _this.accountNumber = accountNumber;
        _this.accountName = accountName;
        _this.availableBal = availableBal;
        return _this;
    }
    // pay(paymentAmt: number) {
    //     this.availableBal -= paymentAmt;
    //     console.log(`Payment is successful using account ${this.accountNumber}. Updated balance: ${this.availableBal}`);
    //     console.log("");
    //     return true;
    // }
    Bank.prototype.balance = function () {
        return this.availableBal;
    };
    return Bank;
}(PaymentMethod));
exports.Bank = Bank;
