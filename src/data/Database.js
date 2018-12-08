import { Sequelize } from 'sequelize';

import Record from './RecordModel';

class Database {

  async connect() {
    this.db = new Sequelize('sqlite:./records.rack');
    this.Record = this.db.define('record', Record.GetDatabaseDefinition(Sequelize));

    return this.Record.sync();
  }

  /*
  async ensureDebugData() {
    const debugRecords = [
      {
        id: 1,
        title: 'Los Campesinos! - Hello Sadness',
      },
      {
        id: 2,
        title: 'The Antlers - Hospice',
      },
    ];

    const creates = [];
    for (const record of debugRecords) {
      creates.push(this.saveRecord(record));
    }

    await Promise.all(creates);
  }
  */

  async saveRecord(record) {
    return this.Record.create(record);
  }

  async getAllRecords() {
    return this.Record.findAll();
  }

  async getRecord(recordId) {
    const record = await this.Record.findByPk(recordId);
    const trackList = record.trackList.split('\n');
    return new Record(record.id, record.title, record.artist, record.year, record.albumCover,
       trackList);
  }

}

export default Database;
