import { isValidEmail, isValidPassword } from '../utils/validation.js';

const checkEmailPassword = (req, res, next) => {
  const { email, password } = req.body;
  if (!(isValidEmail(email) && isValidPassword(password))) {
    return res
      .status(406)
      .json({
        error: 'Invalid Format Email or Password',
      })
      .end();
  }
  req.values = { email, password };
  return next();
};

export default checkEmailPassword;
