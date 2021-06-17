import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      cpf: Sequelize.STRING,
      nome: Sequelize.STRING,
      telefone: Sequelize.STRING,
      dt_nascimento: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }
}
