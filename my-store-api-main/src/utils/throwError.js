const throwError = (message, code) => {
    const err = new Error(message);
    err.status = code;
    return err;
};

module.exports = throwError;
