import { USER_SUBSCRIPTIONS } from '../in-memory-db';

export function addPushSubscriber(req, res) {
  // req - object with name, and subscription  properties

  const subRequest = req.body;

  console.log('Received Subscription on the server: ', subRequest);

  USER_SUBSCRIPTIONS.push(subRequest);

  res.status(200).json({
    message: 'Subscription added successfully for user: ' + subRequest.name
  });
}
