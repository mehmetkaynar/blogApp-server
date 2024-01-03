/* -------------------------------------------------------*/
// next bu function middleware yapiyor.Bu hata yakalaliyici icin.3 paramtre olunca middleware, dort olunca error yakalayici.
// app.use(errorHandler):
module.exports = (err, req, res, next) => {
  return res.status(res?.errorStatusCode || 500).send({
    error: true,
    message: err.message,
    cause: err.cause,
    body: req.body,
    // stack: err.stack
  });
};
