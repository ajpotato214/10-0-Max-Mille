import axios from 'axios';

/* Constants */
const TWITCH_API_ROOT_ENDPOINT = 'https://api.twitch.tv/helix/';

// eslint-disable-next-line import/prefer-default-export
export const getStreams = (clientId, accessToken, optionalParams) => {
  const params = optionalParams;

  return axios
    .get(`${TWITCH_API_ROOT_ENDPOINT}streams`, {
      headers: {
        'client-id': clientId,
        Authorization: `Bearer ${accessToken}`,
      },
      params,
    })
    .then((response) => response.data.data);
};
