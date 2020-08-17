import React from 'react';
import AdSlideshow from './AdSlideshow';
import Status from '../model/status';
import recordStatus from '../api/maxMilleBackendAPI';
import sleep from '../utils/sleep';

import config from '../../../config.json';

const MAX_MILLE_STATUS_INTERVAL = process.env.MAX_MILLE_STATUS_INTERVAL;

export default class StreamSource extends React.Component {
  constructor() {
    super();

    this.campaign = config.campaign;
    this.streamService = config.stream.service;
    this.channel = config.stream.channelName;
    this.durationPerAd = config.adRoll.settings.durationPerAd;
    this.images = config.adRoll.images;
  }

  componentDidMount() {
    this.send('start');

    setInterval(() => {
      this.send('continue');
    }, MAX_MILLE_STATUS_INTERVAL);

    window.addEventListener('beforeunload', () => {
      this.send('stop');

      // A sleep timer to prevent OBS from unloading page before the asynchronous send function
      // has a chance to send status. This issue is OBS specific; Xsplit does not have this issue.
      sleep(1000);

      return 'Changing scene';
    });
  }

  send(status) {
    const message = new Status(
      this.campaign,
      this.streamService,
      this.channel,
      status
    );

    recordStatus(JSON.stringify(message));
  }

  render() {
    return (
      <AdSlideshow durationPerAd={this.durationPerAd} images={this.images} />
    );
  }
}
