const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

// Configure multer so that it will upload to '/public/images'
 const multer = require('multer')
 const upload = multer({
   dest: '../public/images/',
     limits: {
         fileSize: 10000000
           }
           });

const users = require("./users.js");
const User = users.model;

const storySchema = new mongoose.Schema({
	  user: {
		      type: mongoose.Schema.ObjectId,
		      ref: 'User'
		    },
	  path: String,
	  title: String,
	  description: String,
	  created: {
		      type: Date,
		      default: Date.now
		    },
});

const Story = mongoose.model('Story', storySchema);

// upload story
 router.post("/", auth.verifyToken, User.verify, upload.single('story'), async (req, res) => {
   // check parameters
     if (!req.file){
	 const story = new Story({
		 user: req.user,
		 path: "/images/delight.png",
		 title: req.body.title,
		 description: req.body.description,
	 });
     }
     else { 
     	const story = new Story({
	         user: req.user,
	         path: "/images/" + req.file.filename,
	         title: req.body.title,
	         description: req.body.description,
	       });
	 }
    try {
	        await story.save();
	        return res.sendStatus(200);
    } catch (error) {
	console.log(error);
	return res.sendStatus(500);
    }
 });

// get my photos
router.get("/", auth.verifyToken, User.verify, async (req, res) => {
   // return photos
   try {
     let stories = await Story.find({
       user: req.user
     }).sort({
       created: -1
     });
     return res.send(stories);
   } catch (error) {
     console.log(error);
     return res.sendStatus(500);
   }
});

module.exports = {
	  model: Story,
	  routes: router,
}
