const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    gmail:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: false,
    },
});
module.exports = User = mongoose.model("user",UserSchema);
