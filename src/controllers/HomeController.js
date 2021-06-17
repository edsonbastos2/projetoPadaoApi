import User from '../models/User';

class HomeController {
  async index(req, res) {
    const novoUser = await User.create({
      cpf: '01172345325',
      nome: 'Edson Bastos',
      telefone: '9999-9999',
      dt_nascimento: '27/11/1985',
    });
    res.json(novoUser);
  }
}

export default new HomeController();
