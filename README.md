# Udagram RestAPI Backend

Udagram is a simple cloud application developed along side the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
1. [The Simple Frontend](https://github.com/grutt/udacity-c2-frontend)
A basic Ionic client web application which consumes the RestAPI Backend. 
2. [The RestAPI Backend](https://github.com/grutt/udacity-c2-restapi) `This Repo`
Which is a Node-Express server which can be deployed to a cloud service.
3. [The Image Filtering Microservice](https://github.com/grutt/udacity-c2-image-filter)
Which is the final project for the course. It is a Node-Express application which runs a simple Python script to process images.
***

## Getting Setup
### Installing Node and NPM
This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (NPM is included) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).


### Installing project dependencies
This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:
```bash
npm install
```
>_tip_: **npm i** is shorthand for **npm install**

### Installing useful tools
#### 1. [Postbird](https://github.com/paxa/postbird)
Postbird is a useful client GUI (graphical user interface) to interact with our provisioned Postgres database. We can establish a remote connection and complete actions like viewing data and changing schema (tables, columns, ect).

#### 2. [Postman](https://www.getpostman.com/downloads/)
Postman is a useful tool to issue and save requests. Postman can create GET, PUT, POST, etc. requests complete with bodies. It can also be used to test endpoints automatically. We've included a collection (`./udacity-c2-restapi.postman_collection.json `) which contains example requsts.

### Provisioning Cloud Datastores
Before running the complete server, you'll need provision:
1. Relational Postgres using RDS
2. Media Assets using S3

We cover the process of setting up these cloud services in depth in the course. 

Your configuration for these resources must be set in  `./src/config/config.ts` (or better yet, as enviornment variables using the instructions in the enviornment variable concept).

>_tip_: this project uses the SignedURL pattern to provide authorized links to interact with resources in our S3 buckets. [Here's some additional reading](https://medium.com/@aakashbanerjee/upload-files-to-amazon-s3-from-the-browser-using-pre-signed-urls-4602a9a90eb5) on the topic.

***
## Project Structure

The main entry point for the server is `./src/server.ts`, however, in this more complex project, api endpoints are broken into feature directories. In `server.ts`, the `api/v0/` endpoints are linked using this line of code.
```javascript 
  app.use('/api/v0/', IndexRouter)
```

`IndexRouter` is located within `./src/controllers/v0/index.router.ts` where `./src/controllers/v0/` contains all the v0 routes and models which are again logically modularized into feed and users.

This project also uses [SequelizeJs](http://docs.sequelizejs.com/) as an Object-Relational Map (ORM) to link our local variable objects to our relational database. Each feature's models are located in a `models/` directory in the feature directory. The `./src/sequelize.ts` file instantiates the Sequelize object using our configuration in `./src/config/config.ts`. The database state is managed using migrations located in `./src/migrations/`. These migrations are run when the server is first run, if the database is not at the most recent state.

This project uses AWS S3 to store media (images). The AWS SDK and S3 service is instantatied with configuration from `./src/config/config.ts` in `./src/aws.ts`.

***

## Running the Server Locally
To run the server locally in developer mode, open terminal and run:
```bash
npm run dev
```

Developer mode runs off the TypeScript source. Any saves will reset the server and run the latest version of the codebase. 

## Building for Deployment
To transpile and build the source for deployment, open terminal and run:
```bash
npm run build
```
This will transpile the TypeScript source into JavaScript, copy our required package.json file, and zip to create a build artifact `./www/Archive.zip`. This artifact can be uploaded to elastic beanstalk for deployment.
