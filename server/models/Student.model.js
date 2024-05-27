const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { format } = require("morgan");
const Schema = mongoose.Schema;

const studentSchema = new Schema( {
  firstName: { type: String, required: true },
  lastName:{ type: String, required: true },
  email: { type: String, unique:true, required: true },
  phone: { type: String, required: true },
  linkedinUrl: { type: String, default: '' },
  languages: { type: [String], enum: ['English' , 'Spanish', 'French', 'German', 'Portuguese', 'Dutch', 'Other']},
  program: { type: String, enum: ['Web Dev', 'UX/UI', 'Data Analytics', 'Cybersecurity' ]},
  background: { type: String, default: ''},
  image: { type: String, default: 'https://i.imgur.com/r8bo8u7.png'},
  cohort: [{ type: Schema.Types.ObjectId, ref: 'Cohort' }],
  projects: Array
})

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;