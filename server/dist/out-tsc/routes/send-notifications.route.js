"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var in_memory_db_1 = require("../in-memory-db");
var webpush = require('web-push');
function sendNotifications(req, res) {
    console.log('Total subscriptions', in_memory_db_1.USER_SUBSCRIPTIONS.length);
    var payload = req.body;
    // sample notification payload
    var notificationPayload = {
        notification: {
            title: 'PWA Demo',
            body: payload.message,
            dir: 'ltr',
            icon: 'https://pwaclient.azurewebsites.net/assets/icons/icon-96x96.png',
            image: 'https://pwaclient.azurewebsites.net/assets/images/ready.png',
            vibrate: [100, 50, 100],
            persistant: true,
            renotify: false,
            silent: false,
            sticky: false,
            data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
            },
            actions: [
                {
                    action: '0',
                    icon: 'https://pwaclient.azurewebsites.net/assets/images/check-icon.png',
                    title: 'Confirm Message'
                },
                {
                    action: '1',
                    icon: 'https://pwaclient.azurewebsites.net/assets/images/like.png',
                    title: 'Close'
                }
            ]
        }
    };
    Promise.all(in_memory_db_1.USER_SUBSCRIPTIONS.map(function (subscriptionRequest) {
        notificationPayload.notification.title =
            'For: ' + subscriptionRequest.name;
        webpush.sendNotification(subscriptionRequest.sub, JSON.stringify(notificationPayload));
    }))
        .then(function () {
        return res.status(200).json({ message: 'Notifications sent successfully for .' });
    })
        .catch(function (err) {
        console.error('Error sending notifications, reason: ', err);
        res.sendStatus(500);
    });
}
exports.sendNotifications = sendNotifications;
//# sourceMappingURL=send-notifications.route.js.map