# Intro To Our Cluster Map
* [COLT'S GITHUB CODE FOR THIS SECTION](https://github.com/Colt/YelpCamp/tree/def9ebf5577f064da85c6cc8b9c8aaa0004ae8b1)

## Adding Earthquake Cluster Map
* [MAPBOX CLUSTER EXAMPLE](https://docs.mapbox.com/mapbox-gl-js/example/cluster/)
- Has all the code we need to recreate one
- you can even play around in jsfiddle or codepen to make alterations before coping over
- Let's just copy the map --> for earthquake information:
- Place this div in `index.ejs` for campgrounds above `h1`:
```html
<div id="map"></div>
```
- style inline for now --> will move to separate stylesheet later
```html
<div id="map" style="width: 100%; height: 500px"></div>
```
- create new file in public under `javascripts` --> `touch public/javascripts/clusterMap.js`
- Copy all the js in the script tags from MAPBOX example
- include script tag at bottom of `index.ejs` for campgrounds
```js
    <script src="/javascripts/clusterMap.js"></script>
```
- now we have a map showing up!!
* ![Map in Index Page](assets/cluster1.png)
- copy over same script tap from show page with mapbox token in index page so you don't have to hard code it in the js script and have one centralized place to have it in case we change it and then we don't have to go back to the multiple times we are using it 
```html
<script>
  const mapToken = '<%-process.env.MAPBOX_TOKEN%>';
</script>
```
- know we need to get our data in there which is not too hard but we hard coding the location for the coordinates to be the same in all the seeded campgrounds when we reseeded in the last section so they will be in one massive cluster --> need to reseed data again

## Reseeding Our Database (again)
- need to spread them out across the US
- Use the location --> and in our cities file under `seeds` we are already given the latitude and longitude --> we do not want to use geoData and send unnecessary requests to mapbox API
- just like we did for location
```js
const camp = new Campground({
      //YOUR USER ID
      author: '608056f48d40d841ba08c88d',
        location: `${cities[random1000].city}, ${cities[random1000].state}`,
        title: `${sample(descriptors)} ${sample(places)}`, 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt maiores consectetur asperiores iure obcaecati quia voluptatum ipsa error, optio illo molestiae enim voluptatem itaque suscipit? Culpa excepturi libero deleniti.',
        price, //shorthand do not need price: price 
        geometry : { 
          type: "Point", 
          coordinates: [
            cities[random1000].longitude,
            cities[random1000].latitude
          ] 
        },
```
- now reseed the database

## Basic Clustering Campgrounds
- Let's Plug our new data into the Cluster Map
- First lets console.log a few of the items in the script to test the events in the JS for Cluster Maps
* ![Testing Events in the Script for Cluster Map](assets/cluster2.png)
- LETS ADD OUR CAMPGROUND DATA
* When map loads --> add a new source and set cluster option to true
- [CHECK OUT THE EARTHQUAKE DATA](https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson)
- ![IMAGE OF DATA](assets/cluster3.png)
```js
{
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
//KEY OF FEATURES
"features": [
{ "type": "Feature", "properties": { "id": "ak16994521", "mag": 2.3, "time": 1507425650893, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [ -151.5129, 63.1016, 0.0 ] } },
{ "type": "Feature", "properties": { "id": "ak16994519", "mag": 1.7, "time": 1507425289659, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [ -150.4048, 63.1224, 105.5 ] } },
```
- need to pass our data through so we are using our own data rather than some document online
- we will put it in a variable like we did in the show page with the `JSON` data from `campground` --> here we want `campgrounds`
```js
    <script>
      const mapToken = '<%-process.env.MAPBOX_TOKEN%>';
      const campgrounds = <%-JSON.stringify(campgrounds)%>;
    </script>
```
- pass in `campgrounds` as data
- WE GET AN ERROR MESSAGE
```js
Error {message: "Cannot read property 'length' of undefined"}
message: "Cannot read property 'length' of undefined"
__proto__: Object
```
- EVERYTHING IN Earthquake --> located under a key of `Features` --> It's just an array --> but MapBox is actually expecting an object with the key of features set to an array of all our data
- we just need to make our data conform to that pattern
- when you stringify the campgrounds just make an object in there
```js
  <script>
    const mapToken = '<%-process.env.MAPBOX_TOKEN%>';
    const campgrounds = { features: <%-JSON.stringify(campgrounds)%> };
  </script>
```
## Tweaking Clustering Code
- right now all sources are pointing towards `earthquakes` but we can have multiple sources
* change all earthquake refs under `source` to campgrounds
- have multiple layers for circle on map that we can tweak and play around with
- Here we are interpolating a number for the amount of campgrounds in that cluster number, If you put `Num:` in from of text in text-field that is in brackets it would show up as text in the circle before calculated number of all campgrounds in that cluster:
```js
  map.addLayer({
    id: 'cluster-count',
    type: 'symbol',
    source: 'campgrounds',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}', //We are interpolating a number that matchbox counts. 
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12,
    },
  });
```
## Changing Cluster Size and Color

## Adding Custom Popups

