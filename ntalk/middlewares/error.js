exports.notFound = (req, res, next) => {
    res.status(404);
    res.render('not-found');
};

exports.serverError = (req, res, next) => {
    res.status(500);
    res.render('server-error', { error });
};