/* eslint-disable import/no-cycle */
import jwt from 'jsonwebtoken';
import { Helper, genericErrors } from '../utils';
import { config, db } from '../config';
import moviesQueries from '../queries/movies.queries';

export const checkAuthorizationToken = (authorization) => {
  let bearerToken = null;
  if (authorization) {
    const token = authorization.split(' ')[1];
    bearerToken = (authorization.includes('Bearer')) ? token : authorization;
  }
  return bearerToken;
};

export const userAuth = (req, res, next) => {
  try {
    const {
      headers: { authorization },
    } = req;
    const bearerToken = checkAuthorizationToken(authorization);
    if (!bearerToken) {
      return Helper.errorResponse(req, res, genericErrors.authRequired);
    }
    const decoded = jwt.verify(bearerToken, config.SECRET);
    req.decoded = decoded;
    req.decoded.token = bearerToken;
    return next();
  } catch (error) {
    return Helper.errorResponse(req, res, genericErrors.authRequired);
  }
};

export const isAuthorized = (roles) => (req, res, next) => {
  try {
    if (roles.includes(req.decoded.role)) {
      return next();
    }
    return Helper.errorResponse(req, res, genericErrors.rolePermission);
  } catch (error) {
    return Helper.errorResponse(req, res, genericErrors.serverError);
  }
};

export const checkUserMoviePermission = async (req, res, next) => {
  try {
    const { userId, role } = req.decoded;
    if (role === 'basic') {
      const { count } = await db.one(
        moviesQueries.getMovieLogCountPerMonth, [userId],
      );
      if (count >= 5) {
        return Helper.errorResponse(req, res, genericErrors.moviePermission);
      }
    }
    if (role === 'premium') return next();
    return next();
  } catch (error) {
    return Helper.errorResponse(req, res, genericErrors.serverError);
  }
};
