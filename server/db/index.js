const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://liorlsa9:SOLO3796@cluster0.cbh9k.mongodb.net/Weather-app?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });
};
(async () => {
    try {
        await connectDB();
        console.log("connect to DB")
    } catch (e) {
        console.log("failed to connect db");
    }

})();

module.exports = mongoose.connection;
