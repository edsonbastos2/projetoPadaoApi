import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../models/User';
import Username from '../models/Username';

const models = [User, Username];

const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
