import * as express from 'express';

import { Application } from 'express';
import { readAllCustomers } from './routes/read-all-customers.route';
import { addPushSubscriber } from './routes/add-push-subscriber.route';
import { sendNotifications } from './routes/send-notifications.route';
import { getPushSubscribers } from './routes/get-push-subscribers.route';
import { readAllNews } from './routes/read-all-news.route';
const bodyParser = require('body-parser');

const webpush = require('web-push');
const cors = require('cors');


const app: Application = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

// REST API
app.route('/api/customers').get(readAllCustomers);

app.route('/api/subscribe').post(addPushSubscriber);

app.route('/api/sendNotifications').post(sendNotifications);

app.route('/api/subscribers').get(getPushSubscribers);

app.route('/api/news').get(readAllNews);

// launch an HTTP Server
const httpServer = app.listen(process.env.PORT || 9000, () => {
  console.log('HTTP Server running on port' + httpServer.address().port);
});
