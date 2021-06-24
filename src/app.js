import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import UsersRouter from './routers/userRouter';
import userNamaRouter from './routers/usernameRouter';
import tokenRouter from './routers/tokenRouter';

const whiteList = [
  'http://localhost:3000',
  'https://pt.wikipedia.org',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by cors'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users', UsersRouter);
    this.app.use('/username', userNamaRouter);
    this.app.use('/tokens', tokenRouter);
  }
}

export default new App().app;
