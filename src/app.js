import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from 'express';
import homeRouter from './routers/homeRouter';
import userNamaRouter from './routers/usernameRouter';
import tokenRouter from './routers/tokenRouter';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users', homeRouter);
    this.app.use('/username', userNamaRouter);
    this.app.use('/tokens', tokenRouter);
  }
}

export default new App().app;
