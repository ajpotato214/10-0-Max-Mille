import Joi from 'joi';

export const statusSchema = Joi.object({
  campaign: Joi.string().lowercase().required(),
  streamService: Joi.string().lowercase().required(),
  channel: Joi.string().lowercase().required(),
  status: Joi.string().valid('start', 'continue', 'stop').required(),
});

export default class Status {
  static deserialize(content) {
    const status = JSON.parse(content);

    const { error, value } = statusSchema.validate(status);

    if (error) {
      throw error;
    }

    return value;
  }

  constructor(campaign, streamService, channel, status) {
    this.campaign = campaign;
    this.streamService = streamService;
    this.channel = channel;
    this.status = status;

    const { error } = statusSchema.validate(this);

    if (error) {
      throw error;
    }
  }
}
