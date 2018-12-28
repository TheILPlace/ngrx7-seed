import { USER_SUBSCRIPTIONS } from '../in-memory-db';

export function getPushSubscribers(req, res) {
  // req - object with name, and sub  properties

  res.status(200).json(USER_SUBSCRIPTIONS.map(subRequest => subRequest.name));
}
