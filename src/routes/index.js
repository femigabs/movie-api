/* eslint-disable import/no-cycle */
import { Router } from 'express';
import MovieRoute from './movie.routes';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome To Movie API v1' });
});

router.use('/movies', MovieRoute);

export default router;
