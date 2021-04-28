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

## Basic Clustering Campgrounds

## Tweaking Clustering Code

## Changing Cluster Size and Color

## Adding Custom Popups

