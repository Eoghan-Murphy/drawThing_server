const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  image: String,
  time_created: Date,
  likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
  comments: [{type: Schema.Types.ObjectId, ref: 'Post'}],
  remix_of: {type: Schema.Types.ObjectId, ref: 'Post'},
  super_post: {type: Schema.Types.ObjectId, ref: 'Post'}
})

module.exports = mongoose.model("Post", schema)