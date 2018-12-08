import { Sequelize } from 'sequelize';

export default class Record extends Sequelize.Model {

  constructor(id, title, artist, year) {
    super();
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
  }

  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: { type: DataTypes.DECIMAL, primaryKey: true },
        title: DataTypes.STRING,
        artist: DataTypes.STRING,
        year: DataTypes.INTEGER,
      },
      {
        tableName: 'record',
        sequelize,
      },
    );
  }

}

export class DiscogsRecord extends Record {

  constructor(id, title, year) {
    const titleSplits = title.split('-');
    super(id, titleSplits[0], titleSplits[1], year);
  }

}
