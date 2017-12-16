const {
  mongoose,
  db
} = require('../mongo');

const patientSchema = new mongoose.Schema({
  username: String,
  patients: [{
    name: String,
    age: Number,
    disease: Array,
    discoveryTime: Number,
    genderCode: Number,
    weight: Number,
    height: Number,
    remark: String,
    mobile: Number
  }]
});

module.exports = db.model('Patients', patientSchema);
