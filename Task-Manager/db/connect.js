const mongoose = require("mongoose")

const connectionString = "mongodb+srv://magdelena:greska2015@taskmanager.a3dzz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}
module.exports = connectDB