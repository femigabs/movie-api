/* eslint-disable import/no-cycle */
import { Helper } from '../utils';
import { config, db } from '../config';
import moviesQueries from '../queries/movies.queries';

export const createMovie = async (body, decoded) => {
  const { title } = body;
  const result = await Helper.makeRequest(
    `https://www.omdbapi.com/?t=${title}&apikey=${config.OMDB_API_KEY}`,
    'POST',
  );
  const {
    Title, Released, Genre, Director,
  } = result;

  db.tx(async (t) => {
    const movie = await t.one(moviesQueries.addMovie, [
      decoded.userId, Title, Released, Genre, Director,
    ]);
    await t.none(moviesQueries.addMovieLog, [
      movie.user_id,
      movie.id,
    ]);
  });
};

export const getMovies = async (decoded) => {
  const { userId } = decoded;
  return db.any(moviesQueries.getAllMovieByUserId, [userId]);
};
