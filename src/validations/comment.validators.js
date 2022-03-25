import Joi from '@hapi/joi';
import baseValidator from '.';

export const addComment = (req, res, next) => {
  const schema = Joi.object({
    comment: Joi.string().required(),
  });
  baseValidator(schema, req, res, next, 'body');
};

export const commentParams = (req, res, next) => {
  const schema = Joi.object({
    episodeId: Joi.number().required(),
  });
  baseValidator(schema, req, res, next, 'params');
};
