import jwt from 'jsonwebtoken';
import Username from '../models/Username';

// classe para gerar token
class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      res.status(401).json({
        errors: ['Credenciais inválidad!'],
      });
    }
    const username = await Username.findOne({ where: { email } });

    if (!username) {
      res.status(401).json({
        errors: ['Usuário não existe!'],
      });
    }

    if (!(await username.passwordIsValid(password))) {
      res.status(401).json({
        errors: ['Senha inválida!'],
      });
    }

    const { id } = username;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    res.json({ token, username: { nome: username.nome, id, email } });
  }
}

export default new TokenController();
