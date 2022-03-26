import Joi from '@hapi/joi';
import baseValidator from '.';

const addMovieValidator = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
  });
  baseValidator(schema, req, res, next, 'body');
};

export default addMovieValidator;
