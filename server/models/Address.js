const mongoose = require('mongoose');



const AddressSchema = new mongoose.Schema({
    userId: String,
    address: String,
    city: String,
    phone:String,
    pincode: String,
    notes: String
}, { timeseries: true })



module.exports = mongoose.model("Address", AddressSchema)