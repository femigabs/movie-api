/* eslint-disable max-len */
import axios from 'axios';
import genericError from '../error/generic';
import constants from '../constants/messages';
import { ModuleError } from '..';

const { serverError } = genericError;
const { FAIL } = constants;

export const apiErrLogMessager = (error, req) => {
  logger.error(
    `${error.name} - ${error.status} - ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`,
  );
};

export const moduleErrLogMessager = (error) => logger.error(`${error.status} - ${error.name} - ${error.message}`);

export const makeRequest = async (url, method, options = {}) => {
  try {
    const { data } = await axios({ url, method, ...options });
    logger.info('Request processed successfully');
    return data;
  } catch (error) {
    const status = e.response ? e.response.status : 500;
    const moduleError = new ModuleError({ message: error.message, status });
    moduleErrLogMessager(moduleError);
    throw moduleError;
  }
};

export const successResponse = (res, message, code, data) => {
  res.status(code).json({
    message,
    code,
    data,
  });
};

export const errorResponse = (req, res, error) => {
  const aggregateError = { ...serverError, ...error };
  apiErrLogMessager(aggregateError, req);
  return res.status(aggregateError.status).json({
    status: FAIL,
    message: aggregateError.message,
    errors: aggregateError.errors,
  });
};
