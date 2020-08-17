export default class Status {
  constructor(campaign, streamService, channel, status) {
    this.campaign = campaign;
    this.streamService = streamService;
    this.channel = channel;
    this.status = status;

    // eslint-disable-next-line array-callback-return
    Object.keys(this).map((key) => {
      // lowercase all properties
      this[key] = this[key].toLowerCase();
    });
  }
}
