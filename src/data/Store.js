import { decorate, observable, action } from 'mobx';

import Database from './Database';
import DiscogsService from '../services/DiscogsService';

class Store {

  constructor() {
    this.records = [];
    this.selectedRecord = undefined;

    this.searchResults = [];
  }

  async init() {
    this.discogs = new DiscogsService();

    this.db = new Database();
    await this.db.connect();
    await this.loadRecords();
  }

  async loadRecords() {
    this.records = await this.db.getAllRecords();
  }

  async selectRecord(id) {
    this.selectedRecord = await this.db.getRecord(id);
  }

  async saveRecord(discogsId) {
    try {
      const master = await this.discogs.getMasterRelease(discogsId);
      await this.db.saveRecord(master);
      this.loadRecords();
    } catch (e) {
      console.error(e);
    }
  }

  async searchDiscogsRecords(query) {
    this.searchResults = await this.discogs.searchReleases(query);
  }

}

decorate(Store, {
  records: observable,
  selectedRecord: observable,
  searchResults: observable,

  loadRecords: action,
  selectRecord: action,
  saveRecord: action,

  searchDiscogsRecords: action,
});

const appStore = new Store();
appStore.init();

export default appStore;
