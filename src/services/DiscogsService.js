import Discojs from 'discojs';

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
    const response = await this.client.searchRelease(query);
    return response.results.slice(0, limit);
  }

}
