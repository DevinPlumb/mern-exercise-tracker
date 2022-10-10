# Exercise Tracker

This is a modified version of the source code from [this project](https://github.com/beaucarnes/mern-exercise-tracker-mongodb).\
Modifications were made to update CommonJS to ES Modules and use v6\
of `react-router-dom`. Feature changes were not made.

## Environment Setup

You will first need to set up a MongoDB Atlas account, create a\
project, and run a cluster.

After cloning the repository and installing necessary dependencies,\
you will need to create a `.env` file in the `backend` directory\
containing the following:

```
ATLAS_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.sfutwvh.mongodb.net/?retryWrites=true&w=majority
```

where `USERNAME` and `PASSWORD` correspond to your MongoDB Cloud\
Database Users (not the username and password to the account itself,\
per se). Optionally, add a value for `PORT` if you would rather not\
the default (5000).

## Backend Script

In the `backend` directory, you can run:

### `npm start`

Starts the server at [http://localhost:5000](http://localhost:5000)\
(assuming you didn't specify a different port number) with nodemon\
and establishes a connection with the MongoDB database.

## Frontend Scripts

In the project or `src` directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.