import { decorate, observable, action } from 'mobx';

import Database from './Database';

class Store {

  constructor() {
    this.records = [];
    this.selectedRecord = undefined;
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
  }

  async selectRecord(id) {
    this.selectedRecord = await this.db.getRecord(id);
  }

}

decorate(Store, {
  records: observable,
  selectedRecord: observable,

  loadRecords: action,
  selectRecord: action,
});

const appStore = new Store();
appStore.init();

export default appStore;
