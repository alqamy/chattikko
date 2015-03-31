function nf(req, res, next) {
    //not found router
    var err = new Error();
    err.code = 404;
    next(err)
}

function errorHnadler(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
}







module.exports = {
    nf: nf,
    errorHnadler: errorHnadler,
}
