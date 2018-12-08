import { Sequelize } from 'sequelize';

class Database {

  async connect() {
    this.db = new Sequelize('sqlite:./records.rack');
    this.Record = this.db.define('record', {
      id: { type: Sequelize.DECIMAL, primaryKey: true },
      title: Sequelize.STRING,
    });

    return this.Record.sync();
  }

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
      creates.push(this.saveRecord());
    }

    await Promise.all(creates);
  }

  async saveRecord(record) {
    return this.Record.create(record);
  }

  async getAllRecords() {
    return this.Record.findAll();
  }

  async getRecord(recordId) {
    return this.Record.findByPk(recordId);
  }

}

export default Database;
