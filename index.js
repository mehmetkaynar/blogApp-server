"use strict";
/* ExpressJS Start */
const express = require("express");
const app = express();
/* ------------------------------------------------------------------------- */
/* ENV */ // Required Modules
require("dotenv").config();
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8000;
/* ------------------------------------------------------------------------- */
// asyncErrors to errorHandler:
require("express-async-errors");
/* ------------------------------------------------------------------------- */
// DB Connection
require("./src/configs/dbConnection")();
/* ------------------------------------------------------------------------- */
// Home Path
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to Blog App server!",
  });
});
/* ------------------------------------------------------------------------- */
// Middlewares:
// her req,res calissin diye app.use kullaniyoruz.
app.use(express.json());
app.use(require("cors")());
app.use(require("./src/middlewares/findSearchSortPage"));
app.use(require("./src/middlewares/authentication"));
// app.use(require("./src/middlewares/loger"));
/* ------------------------------------------------------------------------- */
// ROUTES:
app.use(require("./src/routes"));
/* ------------------------------------------------------------------------- */
// errorHandler:
app.use(require("./src/middlewares/errorHandler"));
/* ------------------------------------------------------------------------- */
// DEVELOPER SIDE PORT SYSTEM
app.listen(PORT, () => console.log(`Running on http://${HOST}:${PORT}`));
