 const  express = require('express');
 const feedController = require('../controllers/feed');
 const router = express.Router();

// Get /feed/post
   router.get('/posts',feedController.getposts);

  //  Post/feed/post
   router.post('/post',feedController.createPost);

   module.exports = router;

