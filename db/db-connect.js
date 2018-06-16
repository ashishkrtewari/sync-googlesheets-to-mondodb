const mongoose = require('mongoose');

module.exports = (dbUrl) => {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGODB_URI || dbUrl);

    return mongoose;
}