 const  express = require('express');
 const {body} = require('express-validator');
 const feedController = require('../controllers/feed');
 const router = express.Router();

// Get /feed/post
   router.get('/posts',feedController.getposts);

  //  Post/feed/post
   router.post('/post',[
      body('title').trim().isLength({min:5}),
      body('content').trim().isLength({min:5})

   ],feedController.createPost);

   module.exports = router;

