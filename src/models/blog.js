"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS 
------------------------------------------------------- */
const { Schema, model } = require("mongoose");
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// Blog Model:

/* 
{
  "title": "title 2",
  "content": "content 2",
  "image": "image 2",
  "category": "655c6d7f0a6fe58b8a9dcc5f",
  "author": "655b56275a51b6c4beaaa772",
  "status": "p"
}
*/

const Category = require("./category");

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      trim: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    author: {
      type: String,
      trim: true,
      required: true,
    },
    author_info: {
      type: Object,
    },
    status: {
      type: String,
      enum: ["p", "d"],
      default: "d",
    },
    post_views: {
      type: Number,
      default: 0,
    },
    comments: [],
    comment_count: {
      type: Number,
      default: function () {
        // Create
        return this.comments.length;
      },
      transform: function () {
        // Update
        return this.comments.length;
      },
    },
    likes_n: {
      // kimin begendiginin bilgilerini tutuyor.
      type: Array,
      default: [],
    },
    likes: {
      // likes_n uzunlugunu alyor.
      type: Number,
      default: function () {
        return this.likes_n.length;
      },
      transform: function () {
        return this.likes_n.length;
      },
    },
  },
  { collection: "blogs", timestamps: true }
);

/* ------------------------------------------------------- */

BlogSchema.pre("init", function (data) {
  data.id = data._id;
});

/* ------------------------------------------------------- */
module.exports = model("Blog", BlogSchema);
