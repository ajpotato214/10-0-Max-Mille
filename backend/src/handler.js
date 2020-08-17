import { getTwitchClientToken } from './auth';
import { getStreams } from './api/twitchHelixAPI';
import Status from './model/Status';
import StatusRepository from './repository/StatusRepository';

/* Constants */
// Environment Variables
const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID;

const recordTwitchStatus = async (campaign, channel, status) => {
  const token = await getTwitchClientToken();
  const timestamp = Date.now();

  const streamData = await getStreams(TWITCH_CLIENT_ID, token, {
    user_login: channel,
  }).then((response) => response[0]);

  const db = new StatusRepository('twitch', channel);

  if (streamData) {
    const viewerCount = status === 'stop' ? 0 : streamData.viewer_count;

    await db.add(
      streamData.started_at,
      timestamp,
      campaign,
      status,
      viewerCount
    );
  }
};

// eslint-disable-next-line import/prefer-default-export
export const recordStatus = async (event) => {
  const status = Status.deserialize(event.body);

  switch (status.streamService) {
    case 'twitch': {
      await recordTwitchStatus(status.campaign, status.channel, status.status);
      break;
    }
    default:
  }
};
