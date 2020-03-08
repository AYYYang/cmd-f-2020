import mongoose from 'mongoose';
import Resource from './resource';

// url
const url = 'mongodb://localhost:27017/';


// Database name
const dbName = 'cmd2020';

const connectDb = () => {
    return mongoose.connect(url+dbName);
};


const models = { resource: Resource };
export { connectDb };
export default models;