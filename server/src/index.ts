import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from '../routes/posts';

require('dotenv').config();

const express = require('express');

const app = express();

app.use('/posts', postRoutes);

// limit: Controls the maximum request body size
// extended: 	This option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true).

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const uri = process.env.CONNECTION_URL as string;
const port = process.env.PORT;

// useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options
// https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options

mongoose
  .connect(uri)
  .then(() =>
    app.listen(port, () => console.log(`Server running on port: ${port}`))
  )
  .catch((error) => console.log(error.message));
