import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import express from 'express';
import { SECRET } from '../config/index.js';
import prisma from '../config/prisma.js';
import checkEmailPassword from '../middlewares/checkEmailPassword.js';
import errorResponse from '../utils/errorResponse.js';
// Express Router
const login = express.Router();
// Middleware
login.use(checkEmailPassword);
/**
 * Login to APP.
 * @namespace Login
 * @name Login
 * @service LOGIN
 * @version v1
 * @since v1
 * @path {POST} /api/login
 * @auth This route requires HTTP Basic Authentication email/password. If authentication fails it will return a 401 error. If Prisma fails it will return a 409 error. If user try hack with bad values send, it will return a 406 error.
 * @body {String} email It's the unique id for users.
 * @body {String} password A handshake to authorize users.
 * @code {200} Request is successful.
 * @code {401} Request unauthorized email or password incorrect.
 * @code {409} Request is bad format of body incorrect.
 * @response {{ token: string, email: string, id: string }} metadata.user All information needed about a user.
 */
login.post('/', async (req, res) => {
  const { email, password } = req.values;
  // Using prisma to login user or catch error.
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    // Check Password
    const passwordCorrect = user
      ? await bcrypt.compare(password, user.password)
      : false;
    // Return invalid password or email
    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: 'Invalid Email or Password',
      });
    }
    // Set Token
    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
      },
      SECRET,
    );
    // Response.
    return res.send({ token, email: user.email, id: user.id }).end();
  } catch (e) {
    return errorResponse(e, res);
  }
});

export default login;
