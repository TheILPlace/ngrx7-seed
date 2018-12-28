import { USER_SUBSCRIPTIONS } from '../in-memory-db';

const webpush = require('web-push');

export function sendNotifications(req, res) {
  console.log('Total subscriptions', USER_SUBSCRIPTIONS.length);

  const payload = req.body;

  // sample notification payload
  const notificationPayload = {
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
          icon:
            'https://pwaclient.azurewebsites.net/assets/images/check-icon.png',
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

  Promise.all(
    USER_SUBSCRIPTIONS.map(subscriptionRequest => {
      notificationPayload.notification.title =
        'For: ' + subscriptionRequest.name;
      webpush.sendNotification(
        subscriptionRequest.sub,
        JSON.stringify(notificationPayload)
      );
    })
  )
    .then(() =>
      res.status(200).json({ message: 'Notifications sent successfully for .' })
    )
    .catch(err => {
      console.error('Error sending notifications, reason: ', err);
      res.sendStatus(500);
    });
}
