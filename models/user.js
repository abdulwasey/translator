var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: String,
    name:String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    language: String,
    modules: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Modules'

    }],
    isAdmin: { type: Boolean, default: false }
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);