const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    vehicleNo: {
        type:String,
        required: true
    },
    vehicleType: {
        type:String,
        required: true
    },
    vehicleBook: {
        type:String,
        required: true
    }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);

