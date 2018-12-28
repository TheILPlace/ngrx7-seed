"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../database");
function readAllCustomers(req, res) {
    setTimeout(function () {
        res.status(200).json({ customers: database_1.db.readAllCustomers() });
    }, 10000);
}
exports.readAllCustomers = readAllCustomers;
//# sourceMappingURL=read-all-customers.route.js.map