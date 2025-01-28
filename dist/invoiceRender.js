"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InvoiceRender = /** @class */ (function () {
    function InvoiceRender() {
    }
    InvoiceRender.prototype.render = function (rows) {
        rows.forEach(function (row) { return console.log(row.join(" | ")); });
    };
    return InvoiceRender;
}());
exports.default = InvoiceRender;
