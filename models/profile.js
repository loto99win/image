const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        max: 100
    },
    imagePath: {
        type: String,
        required: true
    }
}, { timestamps: true});

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;