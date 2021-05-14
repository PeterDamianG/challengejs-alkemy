/**
 * Function to handler response error.
 * @name errorRespose
 * @param {Object} error An object error from catch on try/catch.
 * @param {Object} res An object response from object response on express.
 * @example
 * errorResponse(e, res);
 * { error: 'Error Server.' }
 * @returns {Object} Returns an error response depend NODE_ENV.
 */
const errorRespose = (error, res) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(409).json({
      error: 'Error Server.',
    });
  }
  if (process.env.NODE_ENV === 'development') {
    return res.status(409).json({
      error: error.message,
    });
  }
  if (process.env.NODE_ENV === 'test') {
    return res.status(409).json({
      error: error.message,
    });
  }
  return res.status(409).json({
    error: error.message,
  });
};

export default errorRespose;
