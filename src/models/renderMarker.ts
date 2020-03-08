import Resource from "./resource";

interface Res {
    name: string,
    lat: number,
    lng: number
}

const myLatLon: Res[] = [];
Resource.find({},['name','location'],  (err, resources) => {
    console.log(err);
    resources.forEach(element => {
        // @ts-ignore
        myLatLon.push({name:element.name,lat:element.location[0], lng:element.location[1]});
    });
    console.log(myLatLon);
});

export {myLatLon};