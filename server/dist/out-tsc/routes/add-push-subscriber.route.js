"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var in_memory_db_1 = require("../in-memory-db");
function addPushSubscriber(req, res) {
    // req - object with name, and subscription  properties
    var subRequest = req.body;
    console.log('Received Subscription on the server: ', subRequest);
    in_memory_db_1.USER_SUBSCRIPTIONS.push(subRequest);
    res.status(200).json({
        message: 'Subscription added successfully for user: ' + subRequest.name
    });
}
exports.addPushSubscriber = addPushSubscriber;
//# sourceMappingURL=add-push-subscriber.route.js.map