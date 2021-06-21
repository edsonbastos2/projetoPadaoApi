import Username from '../models/Username';

class UserName {
  async index(req, res) {
    try {
      const resp = await Username.findAll();
      res.json(resp);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const data = req.body;
      const resp = await Username.create(data);
      res.json(resp);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        res.status(400).json({
          errors: ['Id não encontrado'],
        });
      }
      const username = await Username.findByPk(req.params.id);
      res.json(username);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        res.status(400).json({
          errors: ['Id não encontrado!'],
        });

        const username = await Username.findByPk(req.params.id);

        if (!username) {
          res.status(400).json({
            errors: ['Usuário não encontrado!'],
          });
        }

        const newUsername = await username.update(req.body);
        return res.json(newUsername);
      }
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserName();
