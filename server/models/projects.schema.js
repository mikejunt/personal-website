const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
  title: String,
  summary: String,
  description: String,
  tags: Array,
  highlight: Boolean,
  code_url: String,
  proj_url: String
})

module.exports = mongoose.model('Project', projectSchema);
