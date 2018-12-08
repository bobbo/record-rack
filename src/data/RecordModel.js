export default class Record {

  constructor(id, title, artist, year, albumCover) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.albumCover = albumCover;
  }

  static GetDatabaseDefinition(Types) {
    return {
      id: { type: Types.DECIMAL, primaryKey: true },
      title: Types.STRING,
      artist: Types.STRING,
      albumCover: Types.STRING,
      year: Types.INTEGER,
    };
  }

}
