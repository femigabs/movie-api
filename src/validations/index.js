import { ApiError } from '../utils/index';

const baseValidator = async (schema, req, res, next, type) => {
  try {
    const getReqType = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
    };
    getReqType[type] = await schema.validateAsync(getReqType[type]);
    return next();
  } catch (error) {
    const message = error.messagereplace(/[\"]/gi, '');
    next(ApiError({ message, status: 401 }));
  }
};

export default baseValidator;
