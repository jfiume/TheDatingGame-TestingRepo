import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import mongoose from 'mongoose';

const routes = require('./routes/routes');

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/theDatingGame');

// Initialize http server
const app  = express();
app.use(bodyParser.json());
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});
// Launch the server on the port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
