import * as MovieService from '../services/movie.service';
import { Helper, ApiError, DBError } from '../utils';
import constants from '../utils/constants/messages';
const { moduleErrLogMessager } = Helper;
/**
 * Controller to add movie
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createMovie = async (req, res, next) => {
  try {
    const data = await MovieService.createMovie(req.body, req.decoded);
    Helper.successResponse(
      res, constants.CREATE_SUCCESS('Movie'), 201, data,
    );
  } catch (error) {
    const dbError = new DBError({
      status: constants.RESOURCE_CREATE_ERROR_STATUS('MOVIES'),
      message: error.message,
    });
    moduleErrLogMessager(dbError);
    next(new ApiError({ message: constants.CREATE_MOVIE_ERROR_MSG }));
  }
};

/**
 * Controller to get movies
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getMovies = async (req, res, next) => {
  try {
    const data = await MovieService.getMovies(req.decoded);
    Helper.successResponse(
      res, constants.FETCH_SUCCESS('Movie'), 200, data,
    );
  } catch (error) {
    const dbError = new DBError({
      status: constants.RESOURCE_FETCH_ERROR_STATUS('MOVIES'),
      message: error.message,
    });
    moduleErrLogMessager(dbError);
    next(new ApiError({ message: constants.GET_MOVIE_ERROR_MSG }));
  }
};
