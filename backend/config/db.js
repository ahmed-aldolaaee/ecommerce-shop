const mongoose = require('mongoose');

const connectDB = async () => {

    try {
        const uri = 'mongodb+srv://korora701:zarita200@cluster.ss6r2.mongodb.net/test?retryWrites=true&w=majority';
        const conn = await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
        console.log('connected to mongoDB');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }

    
}

// const connectDB = () => {

//     const uri = 'mongodb+srv://korora701:zarita200@cluster0.ss6r2.mongodb.net/ecommerce?retryWrites=true&w=majority'
//     mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
//     console.log('connected to mongoDB'); 

// }

module.exports = connectDB;