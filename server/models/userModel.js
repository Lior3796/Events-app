const mongoose = require("mongoose");
const Joi = require("joi");
const Joigoose = require("joigoose")(mongoose);
const jwt = require("jsonwebtoken");
const bcyrpt = require("bcrypt");

const userSchema = Joi.object({
    userName: Joi.string().min(4).max(10).required(),
    userPassword: Joi.string().min(4).required(),
    keys: Joi.array().empty().required()

});

const validUser = (userData) => {
    const responseFromJoi = userSchema.validate(userData);
    if (responseFromJoi.error) {
        const { message } = responseFromJoi.error.details[0];
        console.log(message);
        return { msg: message, valid: false }
    }
    return { valid: true };
};

const mongooseUserSchema = new mongoose.Schema(
    Joigoose.convert(userSchema)
);


const UserModel = mongoose.model("user", mongooseUserSchema);

module.exports = {
    UserModel,
    validUser
};


