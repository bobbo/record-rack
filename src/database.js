import { Sequelize } from 'sequelize';

class Database {

  async connect() {
    this.db = new Sequelize('sqlite:./records.rack');
    this.Record = this.db.define('record', {
      id: { type: Sequelize.DECIMAL, primaryKey: true },
      name: Sequelize.STRING,
      artist: Sequelize.STRING,
    });

    return this.Record.sync();
  }

  async ensureDebugData() {
    const debugRecords = [
      {
        id: 1,
        artist: 'Los Campesinos!',
        name: 'Hello Sadness',
      },
      {
        id: 2,
        artist: 'The Antlers',
        name: 'Hospice',
      },
    ];

    const creates = [];
    for (const record of debugRecords) {
      creates.push(this.Record.create(record));
    }

    await Promise.all(creates);
  }

  async getAllRecords() {
    return this.Record.findAll();
  }

  async getRecord(recordId) {
    return this.Record.findById(recordId);
  }

}

export default Database;
