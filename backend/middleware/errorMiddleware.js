//*CUSTOM ERROR HANDLER
// * MIDDLEWARE

const errorHandler = (err, req, res, next) => {
  // this status code comes from the response object in the controller ie res.status(400)
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);
  res.json({
    message: err.message,
    // sending the stack trace
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};

module.exports = { errorHandler };
