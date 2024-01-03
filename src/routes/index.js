const router = require("express").Router();

//users
router.use("/users", require("./user"));

// categories
router.use("/api", require("./comBlogLikCat"));

module.exports = router;
