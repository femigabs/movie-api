/* eslint-disable import/no-cycle */
import { Router } from 'express';
import * as MovieController from '../controllers/movie.controller.js';
import {
  checkUserMoviePermission, isAuthorized, userAuth,
} from '../middlewares/auth.middleware';
import addMovieValidator from '../validations/movies.validations';

const router = Router();

router.post(
  '/',
  userAuth,
  isAuthorized(['basic', 'premium']),
  addMovieValidator,
  checkUserMoviePermission,
  MovieController.createMovie,
);

router.get(
  '/',
  userAuth,
  isAuthorized(['basic', 'premium']),
  MovieController.getMovies,
);

export default router;
