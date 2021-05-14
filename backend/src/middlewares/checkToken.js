import jwt from 'jsonwebtoken';
import { SECRET } from '../config/index.js';

const checkToken = (req, res, next) => {
  const authorization = req.get('authorization');

  const token =
    authorization && authorization.startsWith('bearer ')
      ? authorization.substring(7)
      : null;

  try {
    const decodedToken = jwt.verify(token, SECRET);

    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'Token Missing or Invalid' }).end();
    }

    req.user = decodedToken;
  } catch (e) {
    return res.status(409).json({
      error: e.message,
    });
  }

  return next();
};

export default checkToken;
