import mongoose from 'mongoose';

const curi =  "mongodb+srv://healthpro:goodmind@cluster0-ubsmr.gcp.mongodb.net/cmd2020";

// const connectDb = () => {
//     return mongoose.connect(url+dbName);
// };

const connectDb = () => {
    return mongoose.connect(curi);
};

export { connectDb };