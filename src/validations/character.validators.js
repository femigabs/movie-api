import Joi from '@hapi/joi';
import baseValidator from '.';

const characterQuery = (req, res, next) => {
  const schema = Joi.object({
    sort: Joi.string()
      .valid(
        'name',
        'height',
        'gender',
      ),
    order: Joi.string()
      .valid(
        'asc',
        'desc',
      ),
    gender: Joi.string()
      .valid(
        'male',
        'female',
        'n/a',
      ),
  });
  baseValidator(schema, req, res, next, 'query');
};

export default characterQuery;
