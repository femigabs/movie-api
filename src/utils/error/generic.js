import ApiError from './api.error';
import constants from '../constants/messages';

const {
  INTERNAL_SERVER_ERROR,
  NOT_FOUND_API,
  AUTH_REQUIRED,
  MOVIE_PERMISSION,
  ROLE_PERMISSION
} = constants;

export default {
  serverError: new ApiError({ message: INTERNAL_SERVER_ERROR, status: 500 }),
  notFoundApi: new ApiError({ message: NOT_FOUND_API, status: 404 }),
  authRequired: new ApiError({ message: AUTH_REQUIRED, status: 401 }),
  rolePermission: new ApiError({ message: ROLE_PERMISSION, status: 403 }),
  moviePermission: new ApiError({ message: MOVIE_PERMISSION, status: 403 }),
};
