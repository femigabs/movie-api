import { Helper } from '../utils';
import db from '../config/database';
import moviesQueries from '../queries/movies.queries';

export const createMovie = async (body, decoded) => {
  const { title } = body;
  const result = await Helper.makeRequest(
    `https://www.omdbapi.com/?t=${title}&apikey=210c6629`,
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
