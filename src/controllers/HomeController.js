import User from '../models/User';

class HomeController {
  async index(req, res) {
    const resp = await User.findAll();
    res.json(resp);
  }

  async store(req, res) {
    const data = req.body;
    const resp = await User.create(data);
    res.json(resp);
    const novoUser = await User.create(data);
    res.json(novoUser);
  }
}

export default new HomeController();
