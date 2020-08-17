// eslint-disable-next-line import/no-extraneous-dependencies
import AWS from 'aws-sdk';
import { getOAuthClientCredentialsToken } from './api/twitchOAuthAPI';

/* Constants */
const AWS_SM_TWITCH_CLIENT_TOKEN = `${process.env.STAGE}/MaxMille/TwitchClientToken`;
// Environment Variables
const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const TWITCH_CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;

const secrets = new AWS.SecretsManager();

/* Twitch Auth functions */
export function getTwitchClientToken() {
  return secrets
    .getSecretValue({ SecretId: AWS_SM_TWITCH_CLIENT_TOKEN })
    .promise()
    .then((response) => response.SecretString);
}

export const setTwitchClientToken = async () => {
  if (AWS_SM_TWITCH_CLIENT_TOKEN && TWITCH_CLIENT_ID && TWITCH_CLIENT_SECRET) {
    try {
      const currentToken = await getTwitchClientToken();

      if (currentToken) {
        return;
      }
    } catch {
      const token = await getOAuthClientCredentialsToken(
        TWITCH_CLIENT_ID,
        TWITCH_CLIENT_SECRET
      );

      await secrets
        .createSecret({
          Name: AWS_SM_TWITCH_CLIENT_TOKEN,
          SecretString: token.access_token,
        })
        .promise();
    }
  }
};

export const renewTwitchClientToken = async () => {
  if (AWS_SM_TWITCH_CLIENT_TOKEN && TWITCH_CLIENT_ID && TWITCH_CLIENT_SECRET) {
    const newToken = await getOAuthClientCredentialsToken(
      TWITCH_CLIENT_ID,
      TWITCH_CLIENT_SECRET
    );

    await secrets
      .putSecretValue({
        SecretId: AWS_SM_TWITCH_CLIENT_TOKEN,
        SecretString: newToken.access_token,
      })
      .promise();
  }
};
