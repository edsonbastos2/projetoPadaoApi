import Sequelize, { Model } from 'sequelize';

export default class Username extends Model {
  static init(sequelize) {
    super.init({
      email: Sequelize.STRING,
      password_hash: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
    }, {
      sequelize,
    });
    return this;
  }
}
