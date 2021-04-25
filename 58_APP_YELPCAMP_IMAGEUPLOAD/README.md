# YelpCamp: Image Upload
* [GITHUB CODE FOR SECTION](https://github.com/Colt/YelpCamp/tree/6570c595edf0480fab6b832abd35d37717a081cd)
- Instead of Using image URL --> garbage
- We will learn how to upload many --> NOT JUST ONE!!
- Upload a file to be associated with a campground
- TWO THINGS: 1 - a regular HTML form is not going to able to send files to our server --> we are going to have to change our form in order to do that && 2. we need to stor the images somewhere and typically we don't store them in Mongo (because they could be very large - BSON-document size limit of - 16 megabytes max) --> there are workarounds:
* [GridFS](https://docs.mongodb.com/manual/core/gridfs/)
- does not support multiple uploads
- We are going to use Cloudinary --> could use AWS --> Free Tier will work for us on Cloudinary

## The Multer Middleware
* [Multer Docs](https://github.com/expressjs/multer)

## Cloudinary Registration

## Environment Variables with dotenv
* [DotEnv](https://github.com/motdotla/dotenv)

## Uploading to Cloudinary Basics

## Storing Uploaded Image Links in Mongo

## Displaying Images In A Carousel

## Fixing Our Seeds

## Adding Upload to Edit Page

## Customizing File Input

## A Word Of Warning!

## Deleting Images Form

## Deleting Images Backend

## Adding A Thumbnail Virtual Property
* [Cloudinary Image Transformations](https://cloudinary.com/documentation/image_transformations)