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
  }
}

export default new HomeController();
