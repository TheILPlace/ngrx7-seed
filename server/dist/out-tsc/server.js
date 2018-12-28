"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var read_all_customers_route_1 = require("./routes/read-all-customers.route");
var add_push_subscriber_route_1 = require("./routes/add-push-subscriber.route");
var send_notifications_route_1 = require("./routes/send-notifications.route");
var get_push_subscribers_route_1 = require("./routes/get-push-subscribers.route");
var read_all_news_route_1 = require("./routes/read-all-news.route");
var bodyParser = require('body-parser');
var webpush = require('web-push');
var cors = require('cors');
var vapidKeys = {
    publicKey: 'BGIOU0UB7eUg_VfVFUtLBp6zHqE-524Bg7BemYXwX9bO-vZIz_HNul4hPguzJnK0aEmm51lt1QT6BWabKcSF6EU',
    privateKey: 'ISqsUtDO7YhhCK_C4oyMj9uILhBScZk4Iy697PhT8Zw'
};
webpush.setVapidDetails('mailto: achi@testme.com', vapidKeys.publicKey, vapidKeys.privateKey);
var app = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
// REST API
app.route('/api/customers').get(read_all_customers_route_1.readAllCustomers);
app.route('/api/subscribe').post(add_push_subscriber_route_1.addPushSubscriber);
app.route('/api/sendNotifications').post(send_notifications_route_1.sendNotifications);
app.route('/api/subscribers').get(get_push_subscribers_route_1.getPushSubscribers);
app.route('/api/news').get(read_all_news_route_1.readAllNews);
// launch an HTTP Server
var httpServer = app.listen(process.env.PORT || 9000, function () {
    console.log('HTTP Server running on port' + httpServer.address().port);
});
//# sourceMappingURL=server.js.map