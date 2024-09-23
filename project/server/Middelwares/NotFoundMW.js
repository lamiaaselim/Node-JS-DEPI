class NotFoundMiddleware {
  static handle(req, res, next) {
    res.status(404).json({
      error: `API Endpoint Not Found`,
      message: `The API endpoint ${req.originalUrl} does not exist.`,
      stack: process.env.NODE_ENV === "development" ? new Error().stack : null,
    });

    next();
  }
}

module.exports = NotFoundMiddleware;
