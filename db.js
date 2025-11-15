const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect("mongodb+srv://tajnoor2443:cn1aL1nNfpB8NScN@cluster0.bnpefb0.mongodb.net/sos", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;