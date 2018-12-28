"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var database_data_1 = require("./database-data");
var InMemoryDatabase = /** @class */ (function () {
    function InMemoryDatabase() {
    }
    InMemoryDatabase.prototype.readAllCustomers = function () {
        return _.values(database_data_1.CUSTOMERS);
    };
    return InMemoryDatabase;
}());
exports.db = new InMemoryDatabase();
//# sourceMappingURL=database.js.map