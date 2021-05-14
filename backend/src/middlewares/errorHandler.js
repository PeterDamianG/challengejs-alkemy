const errorHandler = (err, _, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!').end();
  next();
};

export default errorHandler;
