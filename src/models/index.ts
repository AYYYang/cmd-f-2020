import mongoose from 'mongoose';
// url
const url = 'mongodb://localhost:27017/';

// Database name
const dbName = 'cmd2020';

const connectDb = () => {
    return mongoose.connect(url+dbName);
};

export { connectDb };