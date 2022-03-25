/* eslint-disable max-len */
import axios from 'axios';
import { Error } from '../response';

export const makeRequest = async (url, method, options = {}) => {
  try {
    const { data } = await axios({ url, method, ...options });
    logger.info('Request processed successfully');
    return data;
  } catch (error) {
    const err = Error(
      (error.response) ? (error.response.statusText) : error.message,
      (error.response) ? error.response.status : 500,
    );
    logger.error('Helpers::makeRequest', err);
    throw err;
  }
};

export const getArrayId = (data) => data.map((el) => el.episode_id);

export const addCommentCountToMovies = (movies, comments) => {
  const result = [];
  movies.forEach((movie) => {
    const comment = comments.find((el) => movie.episode_id === el.episode_id);
    if (comment) {
      result.push({
        ...movie,
        comment_count: Number(comment.total),
      });
    } else {
      result.push({
        ...movie,
        comment_count: 0,
      });
    }
  });
  return result;
};

export const sortArrayByDate = (array) => array.sort((a, b) => {
  const dateA = new Date(a.release_date);
  const dateB = new Date(b.release_date);
  return dateB - dateA;
});

export const filterData = (data) => data.map((el) => ({
  episode_id: el.episode_id,
  title: el.title,
  opening_crawl: el.opening_crawl,
  release_date: el.release_date,
}));

export const compareAndSortData = (array, key, order = 'asc') => array.sort((a, b) => {
  if (!Object.prototype.hasOwnProperty.call(a, key)
    || !Object.prototype.hasOwnProperty.call(b, key)) {
    return 0;
  }

  const dateA = (a[key] === 'height') ? Number(a[key])
    : a[key].toUpperCase();
  const dateB = (b[key] === 'height') ? Number(b[key])
    : b[key].toUpperCase();

  let comparison = 0;
  if (dateA > dateB) {
    comparison = 1;
  } else if (dateA < dateB) {
    comparison = -1;
  }
  return (
    (order === 'desc') ? (comparison * -1) : comparison
  );
});

export const filterBySingleData = (data, key, value) => data.filter((el) => el[key] === value);

export const calculateHeight = (data) => {
  let cm = 0;
  let count = 0;
  data.forEach((el) => {
    cm += Number(el.height);
    count += 1;
  });
  return {
    count,
    cm,
    ft: Math.floor(cm / 30.48),
    inches: Number((cm / 2.54).toFixed(2)),
  };
};
