/* eslint-disable import/no-cycle */
import fs from 'fs';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import routes from '../routes/index';
import { Helper, genericErrors } from '../utils';

const { errorResponse } = Helper;
const { notFoundApi } = genericErrors;

const logDirectory = './logs';
const checkLogDir = fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const expressConfig = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Use helmet to secure Express headers
  app.use(helmet());
  app.disable('x-powered-by');
  app.use(cors());
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers',
      'Authorization, Origin, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome To Movie API' });
  });

  app.use('/', routes);

  // catch 404 and forward to error handler
  app.use((req, res, next) => next(notFoundApi));

  // error handlers
  // will print stacktrace
  app.use((err, req, res, next) => {
    errorResponse(req, res, err);
  });
};

export default expressConfig;
