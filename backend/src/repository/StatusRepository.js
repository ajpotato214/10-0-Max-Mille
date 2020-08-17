// eslint-disable-next-line import/no-extraneous-dependencies
import AWS from 'aws-sdk';
import IDynamoDBRepository from './IDynamoDBRepository';

export default class StatusRepository extends IDynamoDBRepository {
  constructor(service, channelName) {
    super();

    this.service = service;
    this.channelName = channelName;
    this.tableName = `MaxMille-${this.service.toLowerCase()}-${this.channelName.toLowerCase()}`;
    this.dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
  }

  getTableStatus() {
    return this.dynamodb
      .describeTable({ TableName: this.tableName })
      .promise()
      .then((response) => response.Table.TableStatus);
  }

  add(startedAt, timestamp, campaign, status, viewerCount) {
    const params = {
      TableName: this.tableName,
      Item: {
        StartedAt: { S: startedAt.toString() },
        Timestamp: { N: timestamp.toString() },
        Campaign: { S: campaign.toString() },
        Status: { S: status.toString() },
        ViewerCount: { N: viewerCount.toString() },
      },
    };

    return this.dynamodb.putItem(params).promise();
  }
}
