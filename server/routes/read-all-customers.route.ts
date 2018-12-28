import { db } from '../database';

export function readAllCustomers(req, res) {
  setTimeout(() => {
    res.status(200).json({ customers: db.readAllCustomers() });
  }, 10000);
}
