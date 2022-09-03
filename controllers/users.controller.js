const { User } = require("../models/User");

exports.signupUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = new User({
            email,
            password,
            username: email.split('@')[0]
        });
        const response = await newUser.save();
        return res.json({
            chleoStatus: 0,
            chleoResult: response
        });
    } catch (error) {
        return res.json({
            chleoStatus: 1,
            chleoResult: error.message
        });
    }
};

exports.signinUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email, password });
        if (!existingUser) {
            return res.json({
                chleoStatus: 0,
                chleoResult: 'User not found!'
            });
        }
        return res.json({
            chleoStatus: 0
        });
    } catch (error) {
        return res.json({
            chleoStatus: 1,
            chleoResult: error.message
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { email, username, profile_pic, phone } = req.body;
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.json({
                chleoStatus: 0,
                chleoResult: 'User not found!'
            });
        }
        existingUser.username = username || existingUser.username;
        existingUser.profile_pic = profile_pic || existingUser.profile_pic;
        existingUser.phone = phone || existingUser.phone;
        await existingUser.save();
        return res.json({
            chleoStatus: 0
        });
    } catch (error) {
        return res.json({
            chleoStatus: 1,
            chleoResult: error.message
        });
    }
};