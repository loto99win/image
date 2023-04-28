const Profile = require('../models/profile');

exports.getProfiles = async(req, res) => {
    const profiles = await Profile.find();
    res.status(200).json({ profiles});
};

exports.postProfile = async(req, res) => {
    const {name} = req.body;
    const imagePath = 'http://localhost:2000/images/' + req.file.filename;
    const profile = new Profile({
        name, imagePath,
    });

    const createProfile = await profile.save();
    res.status(201).json({
        profile: {
            ...createProfile._doc,
        }
    })
}