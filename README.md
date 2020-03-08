# cmd-f-2020

build and run for dev: `npm run dev`


### Connecting to MongoDB is set up. 
* The db name is `cmd2020`, the collection name is `resource`.
* data is stored at data.json in ./src/model, there are three samples matching the three locations you have
* you can insert the data by doing the following after running mongo locally:

`$ use cmd2020`
`$ db.createCollection('resource')`
`$ db.resource.insertMany([
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
])`

Have fun :)
