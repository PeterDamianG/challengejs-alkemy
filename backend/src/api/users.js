import bcrypt from 'bcrypt';
import express from 'express';
import prisma from '../config/prisma.js';
import checkEmailPassword from '../middlewares/checkEmailPassword.js';
import checkToken from '../middlewares/checkToken.js';
import errorResponse from '../utils/errorResponse.js';
// Express Router
const users = express.Router();
// Middleware
users.post('/', checkEmailPassword);
users.get('/', checkToken);
/**
 * Create a user.
 * @namespace User
 * @name CreateUser
 * @service Create a User
 * @version v1
 * @since v1
 * @path {POST} /api/users
 * @header {String} Content-Type Set to application/json.
 * @body {String} email An unique id for the user.
 * @body {Number} password A alphanumeric password to handshake a user.
 * @code {200} Request is successful.
 * @code {406} Request Invalid format.
 * @code {409} Request error with Prisma.
 * @response {{id: string, email: string}} metadata.record Response about record sucess updated.
 */
users.post('/', async (req, res) => {
  const { email, password } = req.values;
  // Hash the password.
  const passwordHash = await bcrypt.hash(password, 10);
  // Using prisma to create user or catch error.
  try {
    const result = await prisma.user.create({
      data: {
        email,
        password: passwordHash,
      },
    });
    // Response.
    return res.json({ id: result.id, email: result.email }).end();
  } catch (e) {
    return errorResponse(e, res);
  }
});
/**
 * Get records from a user.
 * @namespace User
 * @name GetRecords
 * @service Get records from a user.
 * @version v1
 * @since v1
 * @path {POST} /api/users
 * @header {String} Content-Type Set to application/json.
 * @header {String} Authorization Set to protocol bearer + token.
 * @code {200} Request is successful.
 * @code {401} Request Invalid token.
 * @code {409} Request error with Prisma.
 * @response {records} metadata.records Response Array with all records from a user.
 */
users.get('/', async (req, res) => {
  const { id } = req.user;
  // Using prisma to get records or catch error.
  try {
    const { records } = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        records: true,
      },
    });
    // Response.
    return res.json(records).end();
  } catch (e) {
    return errorResponse(e, res);
  }
});

export default users;
