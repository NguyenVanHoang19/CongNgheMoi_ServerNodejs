const mongoose = require("mongoose");
const AccountSchema = mongoose.Schema({
    userName:{
        type : String,
        require : true,
    },
    password:{
        type : String,
        required: true,
    },
});
module.exports = Account = mongoose.model("account",AccountSchema);