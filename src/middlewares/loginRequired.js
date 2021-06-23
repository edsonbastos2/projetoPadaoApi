import jwt from 'jsonwebtoken';
import Username from '../models/Username';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const username = await Username.findOne({
      where: { id, email },
    });

    if (!username) {
      return res.json({
        errors: ['Usuário inválido'],
      });
    }
    req.userID = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
