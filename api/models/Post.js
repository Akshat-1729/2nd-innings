const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    content:{
        type:Number,
        enum:[1,2,3]
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
    interested:{
        type:Array,
        default:[]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);