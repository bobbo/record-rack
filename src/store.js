import { decorate, observable, action } from 'mobx';

import Database from './database';

class Store {

  constructor() {
    this.records = [];
  }

  async init() {
    this.db = new Database();
    await this.db.connect();

    await this.loadRecords();
    if (this.records.length === 0) {
      await this.db.ensureDebugData();
      await this.loadRecords();
    }
  }

  async loadRecords() {
    this.records = await this.db.getAllRecords();
    console.log(this.records);
  }

}

decorate(Store, {
  records: observable,

  loadRecords: action,
});

const appStore = new Store();
appStore.init();

export default appStore;
