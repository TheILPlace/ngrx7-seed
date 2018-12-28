import * as _ from 'lodash';
import { CUSTOMERS } from './database-data';

class InMemoryDatabase {
  readAllCustomers() {
    return _.values(CUSTOMERS);
  }
}

export const db = new InMemoryDatabase();
