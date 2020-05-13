const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = Schema({
  displayName: {type: Schema.Types.ObjectId, ref: 'User'},
  display_image: String,
  posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
  likes: [{type: Schema.Types.ObjectId, ref: 'Post'}],
})

module.exports = mongoose.model("User", schema)