export default class Record {

  constructor(id, title, artist, year, albumCover, trackList = []) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.albumCover = albumCover;
    this.trackList = trackList;
  }

  static Sort(a, b) {
    return a.artist.localeCompare(b.artist) || a.title.localeCompare(b.title);
  }

  static FromDbObj(record) {
    const trackList = record.trackList.split('\n');
    return new Record(record.id, record.title, record.artist, record.year, record.albumCover,
       trackList);
  }

  static GetDatabaseDefinition(Types) {
    return {
      id: { type: Types.DECIMAL, primaryKey: true },
      title: Types.STRING,
      artist: Types.STRING,
      albumCover: Types.STRING,
      year: Types.INTEGER,
      trackList: Types.STRING,
    };
  }

}
