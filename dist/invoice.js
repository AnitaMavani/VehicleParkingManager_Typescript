"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invoiceRender_1 = require("./invoiceRender");
var Invoice = /** @class */ (function () {
    function Invoice(parkingSpot, amount) {
        this.parkingSpot = parkingSpot;
        this.amount = amount;
    }
    Invoice.prototype.printInvoice = function () {
        var rows = [
            ['Vehicle', this.parkingSpot.vehicle.vehicleName],
            ['Spot', this.parkingSpot.spotNumber.toString()],
            ['Start Time', this.parkingSpot.startTime.toLocaleDateString()],
            ['End Time', this.parkingSpot.endTime.toLocaleDateString()],
            ['Amount', this.amount.toFixed()],
        ];
        var invoiceRender = new invoiceRender_1.default();
        invoiceRender.render(rows);
        return true;
    };
    return Invoice;
}());
exports.default = Invoice;
