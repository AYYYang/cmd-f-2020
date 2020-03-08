import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    id: Number,
    name: String,
    location: {
        type: [Number],
        required: true
    },
    availability: String,
    services: [String]
}, {collection: "resource"});

const Resource = mongoose.model('Resource', resourceSchema);

// did this to test if database worked
Resource.find({ "name" : "UBC Student Counselling Service" }, 'location',  (err, resources) =>{
    console.log(err);
    console.log(resources);
});

export default Resource;