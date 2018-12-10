import { Sequelize } from 'sequelize';

import Record from './RecordModel';

class Database {

  async connect() {
    this.db = new Sequelize('sqlite:./records.rack');
    this.Record = this.db.define('record', Record.GetDatabaseDefinition(Sequelize));

    return this.Record.sync();
  }

  async saveRecord(record) {
    return this.Record.create(record);
  }

  async getAllRecords() {
    const records = await this.Record.findAll();
    const sorted = records.map(Record.FromDbObj).sort(Record.Sort);
    return sorted;
  }

  async getRecord(recordId) {
    const record = await this.Record.findByPk(recordId);
    return Record.FromDbObj(record);
  }

}

export default Database;
