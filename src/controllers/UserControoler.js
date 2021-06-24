import UserModel from '../models/User';

class UserController {
  async index(req, res) {
    const users = await UserModel.findAll();
    res.json(users);
  }

  async store(req, res) {
    const data = req.body;
    const resp = await UserModel.create(data);
    res.json(resp);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          errors: ['ID não encontrado!'],
        });
      }

      const user = await UserModel.findByPk(id);

      if (!user) {
        res.status(400).json({
          errors: ['Usuário não encontrado!'],
        });
      }

      res.json(user);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({
          errors: ['ID não encontrado!'],
        });
      }

      const user = await UserModel.findByPk(id);

      if (!user) {
        res.status(400).json({
          errors: ['Usuário não encontrado!'],
        });
      }

      const newUser = await user.update(req.body);

      res.json(newUser);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({
        errors: ['ID não encontrado!'],
      });
    }

    const user = await UserModel.findByPk(id);

    if (!user) {
      res.status.json({
        errors: ['Usuário não encontrado!'],
      });
    }

    await user.destroy();

    res.json({
      success: true,
    });
  }
}

export default new UserController();
