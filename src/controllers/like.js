"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Like Controller:
const Like = require("../models/like");
const Blog = require("../models/blog");

module.exports = {
  create: async (req, res) => {
    req.body.user_id = req.user._id;
    req.body.post_id = req.params.id;

    let likes = await Like.findOne({
      //buradaki control ayni kullanici ayni blogu mu secti.

      user_id: req.user._id,
      post_id: req.params.id,
    });

    if (likes) await Like.deleteOne({ _id: likes._id });
    else await Like.create({ user_id: req.user._id, post_id: req.params.id });

    const likesOfpost = await Like.find({ post_id: req.params.id }); //find arrayin icinde obje dondurur.findOne direk obje donduruyor. ondan dolayi 25. satirda direk likes_n: likeOfPost yazdim.

    await Blog.updateOne({ _id: req.params.id }, { likes_n: likesOfpost });

    res.status(201).send({
      error: false,
    });
  },
};
