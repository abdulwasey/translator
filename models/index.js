const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(`mongodb+srv://translation:translation@cluster0-ylxr0.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('DB connection successfull!'));;
module.exports.User = require("./user");
