const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();

// Local MongoDB compass connection
// no atlast conncection
const MONGO_URI = 'mongodb://localhost:27017/graphql-course';
if (!MONGO_URI) {
  throw new Error('You must provide a Mongo Atlas URI');
}

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4 // Use IPv4, skip trying IPv6
}
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, options)
.then(() => {console.log("Connected to MongoDB")})
    .catch((err) => console.log(err));


app.use(bodyParser.json());
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
