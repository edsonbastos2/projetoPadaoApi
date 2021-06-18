import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Username extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O campo deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            isEmail: {
              msg: 'E-mail inválido',
            },
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 255],
            msg: 'A senha deve ter entre 6 e 255 caraxteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (username) => {
      username.password_hash = await bcryptjs.hash(username.password, 8);
    });
    return this;
  }
}
