// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');
const dontenv = require('dotenv');
const { app } = require('./app');

dontenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

// mongoose
//   .connect(process.env.DATABASE_LOCAL, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then((con) => {
//     console.log(con.connections);
//     console.log('DB Connection Successful');
//   });

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB Connection Successful');
  });

//4) SERVER
const port = process.env.PORT;
app.listen(port, () => {});
