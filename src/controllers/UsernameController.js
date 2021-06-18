import Username from '../models/Username';

class UserName {
  async index(req, res) {
    const resp = await Username.findAll();
    res.json(resp);
  }

  async store(req, res) {
    const data = req.body;
    const resp = await Username.create(data);
    res.json(resp);
  }
}

export default new UserName();
