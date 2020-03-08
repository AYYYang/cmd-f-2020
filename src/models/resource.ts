import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    id: { type : Number , unique : true, required : true, index: { unique: true } },
    name: String,
    location: {
        type: [Number],
        required: true
    },
    availability: String,
    services: [String]
}, {collection: "resource"});

const Resource = mongoose.model('Resource', resourceSchema);

// add some fake data into database
Resource.insertMany([
    {
        "id": 1,
        "name": "UBC Student Counselling Service",
        "location": [
            49.2686879,
            -123.2543009
        ],
        "availability": "Hours: 8:30 a.m - 4.30pm",
        "services": [
            "LGBTQ+ Support",
            "Academic Support"
        ]
    },
    {
        "id": 2,
        "name": "Vancouver General Hospital",
        "location": [
            49.261764,
            -123.1221851
        ],
        "availability": "Hours: 9:30 a.m - 4.30pm",
        "services": [
            "LGBTQ+ Support",
            "Post Partum Support"
        ]
    },
    {
        "id": 3,
        "name": "UBC Student Health Service",
        "location": [
            49.2641259,
            -123.2479528
        ],
        "availability": "Hours: 9:00 a.m - 4.30pm",
        "services": [
            "LGBTQ+ Support",
            "Post Partum Support",
            "Psychiatry"
        ]
    }
]).then(r => {
    console.log(`Successfully inserted ${r.length} items!`);
}).catch(e => {
    console.error(`Failed to insert documents: ${e}`)
});

// did this to test if database worked
interface IPair {
    lat: number,
    lng: number
}

const myLatLon: IPair[] = [];
Resource.find({},'location',  (err, resources) => {
    console.log(err);
    resources.forEach(element => {
        // @ts-ignore
        myLatLon.push({lat:element.location[0], lng:element.location[1]});
    });
    console.log(myLatLon);
});

// let myLatLon = [];
// Resource.find({}, 'location'
// ).then((result) => {
//     myLatLon.push({result});
//     }
// ).catch(error => {
//     console.error(error);
// });

export default Resource;
export {myLatLon};