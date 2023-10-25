import jwt from 'jsonwebtoken';

export function authToken(req, res, next) {
  if (!req.headers.authorization)
    return res.status(403).send({ error: 1, message: 'Missing token' });

  const [,token] = req.headers.authorization.split(' ');

  try {
    jwt.verify(token, 'CLE SUPER SECRETE')
    next();
  }
  catch (err) {
    return res.status(403).send({ error: 1, message: 'Invalid token' });
  }
}