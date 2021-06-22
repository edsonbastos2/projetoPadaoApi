import User from '../models/User';

class HomeController {
  async index(req, res) {
    const resp = await User.findAll();
    res.json(resp);
  }

  async store(req, res) {
    try {
      const data = req.body;
      const resp = await User.create(data);
      res.json(resp);
      const novoUser = await User.create(data);
      res.json(novoUser);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          errors: ['ID não encontrado'],
        });
      }

      const user = await User.findByPk(id);
      res.json(user);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new HomeController();
