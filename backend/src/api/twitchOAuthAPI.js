import axios from 'axios';

/* Constants */
const TWITCH_API_ROOT_AUTH_ENDPOINT = 'https://id.twitch.tv/oauth2/';

// eslint-disable-next-line import/prefer-default-export
export const getOAuthClientCredentialsToken = (
  clientId,
  clientSecret,
  scope = []
) => {
  const spaceSeparatedScope = scope.join(' ');

  return axios
    .post(`${TWITCH_API_ROOT_AUTH_ENDPOINT}token`, undefined, {
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'client_credentials',
        scope: spaceSeparatedScope,
      },
    })
    .then((res) => res.data);
};
