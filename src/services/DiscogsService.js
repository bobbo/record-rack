import Discojs from 'discojs';
import Record from '../data/RecordModel';

const CONSUMER_KEY = 'BCujhijEyFQfremugXmU';
const CONSUMER_SECRET = 'ySCqXcIsYYbcvQHUtSdwmtnvzrGMQtHZ';

export default class DiscogsService {

  constructor() {
    this.client = new Discojs({
      consumerKey: CONSUMER_KEY,
      consumerSecret: CONSUMER_SECRET,
    });
  }

  async searchReleases(query, limit = 5) {
    const response = await this.client.searchDatabase({ query, type: 'master' });

    return response.results.slice(0, limit).map((record) => {
      const [artist, ...title] = record.title.split(' - ');
      return new Record(record.id, title.join(''), artist, record.year, record.cover_image);
    });
  }

  async getMasterRelease(id) {
    const master = await this.client.getMaster(id);
    const trackList = master.tracklist.map(track => `${track.position} - ${track.title}`);

    return new Record(master.id, master.title, master.artists[0].name,
        master.year, master.images[0].uri, trackList.join('\n'));
  }

}
