const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	  extended: false
}));

const multer = require('multer')
const upload = multer({
  dest: '/var/www/lab5.byunic.com/images/',
  limits: {
    fileSize: 10000000
  }
});

const mongoose = require('mongoose');

// connect to the database
 mongoose.connect('mongodb://localhost:27017/photobomb', {
   useNewUrlParser: true
   });

   const cookieParser = require("cookie-parser");
   app.use(cookieParser());

   const users = require("./users.js");
   app.use("/api/users", users.routes);

   const stories = require("./stories.js");
   app.use("/api/stories", stories.routes);

   app.listen(3003, () => console.log('Server listening on port 3003'));
