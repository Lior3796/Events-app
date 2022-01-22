const { UserModel, validUser } = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcyrpt = require("bcrypt");
const cookieParser = require("cookie-parser");
const createToken = (id) => {
    return jwt.sign({ id }, 'solo secret', { expiresIn: 60 * 60 * 24 });
}

const handleError = (err) => {
    const errors = { userName: "", userPassword: "" };
    if (err.message === "user isn't exist Exist") {
        errors.userName = "the email is not registed";
    }

    if (err.message === "password not correct") {
        errors.userPassword = "the password incorrect";
    }

    return errors;

}

const login = async (userName, userPassword) => {
    const user = await UserModel.findOne({ userName });
    if (user) {
        const auth = await bcyrpt.compare(userPassword, user.userPassword);
        if (auth) {
            return user;
        }
        throw Error("password not correct");
    }
    throw Error("user isn't exist Exist");
}

const registerUser = async (req, res) => {
    const { userName, userPassword } = req.body;
    const { valid, msg } = validUser({ userName, userPassword });
    if (!valid) res.json({ msg }).status(301);
    try {
        const salt = await bcyrpt.genSalt();
        const hashPassword = await bcyrpt.hash(userPassword, salt);
        const user = await UserModel.create({ userName, userPassword: hashPassword });
        const token = createToken(user._id);
        res.json({ token }).status(201);
    } catch (err) {
        res.status(500).json({ err })
    }
}

const loginUser = async (req, res) => {
    const { userName, userPassword } = req.body;
    try {
        const user = await login(userName, userPassword);
        console.log(user);
        const token = createToken(user._id);
        res.json({ token }).status(201);
    } catch (err) {
        const error = handleError(err);
        res.json({ error }).status(301);
    }
}

const getEvents = async (req, res) => {
    const { userName } = req.body;
    try {
        const event = await UserModel.find({ userName });
        console.log(event);
        res.json({ event: event.keys }).status(201);
    } catch (err) {
        const error = handleError(err);
        res.json({ error: "cant get keys" }).status(301);
    }
}

const getUserEvents = (req, res) => {
    try {
        const userName = req.params.userName || undefined;
        console.log(userName);

        if (!userName) res.json({ error: "No user name added to request" }).status(301);
    } catch (e) {
        res.json({ error: "server Error" }).status(500);
    }
    try {
        const userSelected = UserModel.findOne({ userName: "Liorlsa9" });
        res.json({ keys: userSelected.keys }).status(200);
    } catch (err) {
        res.json({ error: "User not found" }).status(301);
    }
}

const addKeyToUser = async (req, res) => {
    // add middleware
    try {
        const { user } = req.body;

    } catch (e) {
        res.json({ message: "Requset is empty" }).status(301);
    }
    try {
        const { id, user } = req.body;
        let userSelected = await UserModel.findOne({ userName: user });
        userSelected.keys.push(id);
        await userSelected.save();

    } catch (err) {
        res.json({ error: "User not found" }).status(301);
    }

}

const deleteKeyFromUser = async (req, res) => {
    // add middleware
    try {
        const { id, user } = req.body;
        const userSelected = await UserModel.findOne({ userName: user });
        const newKeys = userSelected.keys.filter(key => id != key);
        userSelected.keys = newKeys;
        await userSelected.save();

    } catch (err) {
        res.json({ error: "User not found" }).status(301);
    }

}




module.exports = {
    getEvents,
    registerUser,
    loginUser,
    getUserEvents,
    addKeyToUser,
    deleteKeyFromUser
}