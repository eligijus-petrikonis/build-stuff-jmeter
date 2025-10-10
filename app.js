const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const apisRouter = require("./routes/flow");
const flowRouter = require("./routes/apis");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const viewsDir = path.join(__dirname, 'public');
app.use(express.static(viewsDir));
app.set('public', viewsDir);

app.use("/api", apisRouter);
app.use("/api", flowRouter);
app.all("/apis.html", (req, res) => {
  res.sendFile('apis.html', { root: viewsDir });
});
app.all("/{*any}", (req, res) => {
  res.sendFile('index.html', { root: viewsDir });
});

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({message: err.message});
});

module.exports = app;
