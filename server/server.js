require("dotenv").config();
const fileUpload = require("express-fileupload");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const loginUser = require("./routes/userRoute");

const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();

const db = require("./db");
const methodOverride = require("method-override");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(fileUpload());
app.use(cookieParser());
app.use("/user", loginUser);




if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../client/build")));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "../client/build", "index.html"));
	});
} else {
	app.get("/", (req, res) => {
		res.send("Api running");
	});
}

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


module.exports = app;