class ErrorMiddleware {
  static handle(err, req, res, next) {
    res.status(500).json({
      error: "Internal Server Error",
      message: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    });
    next();
  }
}

module.exports = ErrorMiddleware;
