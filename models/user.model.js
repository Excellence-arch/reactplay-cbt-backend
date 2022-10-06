const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String
})

const UsersModel = mongoose.model("users_tbs", userSchema);

module.exports = UsersModel;
