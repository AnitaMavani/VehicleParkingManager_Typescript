"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paymentProcessor_1 = require("./paymentProcessor");
var constants_1 = require("./constants");
var PaymentManager = /** @class */ (function () {
    function PaymentManager() {
        var _a;
        this.registeredProcessor = (_a = {},
            _a[constants_1.PAYMENT_TYPE_CC] = new paymentProcessor_1.CreditCardProcessor(),
            _a[constants_1.PAYMENT_TYPE_BANK] = new paymentProcessor_1.BankProcessor(),
            _a);
        this.processPay = new paymentProcessor_1.PaymentProcessor();
    }
    PaymentManager.prototype.process = function (owner, amount, paymentMethod) {
        var paymentMethodType = owner.paymentMethod.type;
        var processor = this.registeredProcessor[paymentMethodType];
        if (!processor) {
            throw "Not supported payment method";
        }
        processor.processPayment(paymentMethod, amount);
        return true;
    };
    return PaymentManager;
}());
exports.default = PaymentManager;
