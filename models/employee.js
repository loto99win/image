const { model, Schema } = require('mongoose');

const employeeSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    fn: {
        type: String,
        required: true,
        trim: true
    },
    ln: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true,
        lowercase: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    package: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = model('Employee', employeeSchema);