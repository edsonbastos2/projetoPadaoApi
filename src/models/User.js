import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      cpf: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [11, 15],
            msg: 'O campo cpf deve ter entre 11 e 12 caracteres',
          },
        },
      },
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O campo nome deve ter entre 3 e 225 caracteres',
          },
        },
      },
      telefone: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [11, 12],
            msg: 'O campo telefone deve ter entre 11 e 12 caracteres',
          },
        },
      },
      dt_nascimento: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 11],
            msg: 'O campo data nascimento deve ter entre 8 e 11 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
