const errorHandler = (err, req, res, next) => {
    const statusCode = err.status || 500;
    return res.status(statusCode).send({
        success: false,
        status: statusCode,
        stack: process.env.NODE_ENV,
        message: err.message || 'Something went wrong',
    });
};

module.exports = errorHandler;
