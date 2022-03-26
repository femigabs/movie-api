export default {
  addMovie: `
        INSERT INTO user_movies(
            user_id, 
            title,
            released,
            genre,
            director
        ) VALUES ($1, $2, $3, $4, $5) RETURNING *
    `,
    getAllMovieByUserId: `
        SELECT
            id,
            user_id,
            title,
            released,
            genre,
            director
        FROM user_movies
        WHERE user_id = $1
    `,
  addMovieLog: `
        INSERT INTO user_movie_logs(
            user_id, 
            movie_id
        ) VALUES ($1, $2)
    `,
    getMovieLogCountPerMonth: `
        SELECT
            COUNT(*)
        FROM user_movie_logs
        WHERE user_id = $1 AND (created_at >= DATE_TRUNC('month', CURRENT_DATE)
        AND created_at < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month')
    `,
};
