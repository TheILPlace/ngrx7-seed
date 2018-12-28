"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var in_memory_db_1 = require("../in-memory-db");
function getPushSubscribers(req, res) {
    // req - object with name, and sub  properties
    res.status(200).json(in_memory_db_1.USER_SUBSCRIPTIONS.map(function (subRequest) { return subRequest.name; }));
}
exports.getPushSubscribers = getPushSubscribers;
//# sourceMappingURL=get-push-subscribers.route.js.map