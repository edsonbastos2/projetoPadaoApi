import Username from '../models/Username';

class UserName {
  async index(req, res) {
    try {
      const resp = await Username.findAll({ attributes: ['id', 'nome', 'email'] });
      res.json(resp);
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const data = req.body;
      const resp = await Username.create(data);
      const { id, nome, email } = resp;
      res.json({ id, nome, email });
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
      const { id, nome, email } = username;
      res.json({ id, nome, email });
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const username = await Username.findByPk(req.userID);

      if (!username) {
        res.status(400).json({
          errors: ['Usuário não encontrado!'],
        });
      }

      const newUsername = await username.update(req.body);
      const { id, nome, email } = newUsername;
      res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    const username = await Username.findByPk(req.userID);

    if (!username) {
      res.status(400).json({
        errors: ['Usuário não encontrado!'],
      });
    }

    await username.destroy();
    res.json(null);
  }
}

export default new UserName();
