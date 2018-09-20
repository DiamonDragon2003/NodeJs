module.exports = function (req, res, next) {

    res.sendHttpError = function (error) {

        res.status(error.status);
        if (res.req.headers['x-requested-with'] == 'XMLHTTPRequest') {
            res.json(error);
        } else {
            res.render('error', {
                error: error
              })
        }
    };

    return next();

}