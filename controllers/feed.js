const { validationResult } = require('express-validator');
const Post = require('../model/post');

exports.getposts = (req, res, next) => {
    res.status(200).json({
        posts: [{
            _id: '1',
            title: 'Motivation',
            content: 'Need to be motivated to do something',
            imageUrl: 'Images/Motivation.jpg',
            creator: {
                name: 'Saurabh Verma'
            },
            createdAt: new Date()
        }]
    });
}

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        const error = new Error('validation failed,enter data is incorrect');
        error.statuscode = 422;
        throw error;
    }

    const title = req.body.title;
    const content = req.body.content;

    const post = new Post({
        title: title,
        content: content,
        imageUrl: 'Images/Girls.jpg',
        creator: {
            name: 'Saurabh Verma'
        }
    });
    post.save()
        .then(
            (result) => {
                console.log(result);
                res.status(201).json({
                    Message: 'Posts created successfully......',
                    post: result
                });

            }
        )
        .catch((err) => {
            if (!err.statuscode) {
                err.statuscode = 500;
            }
            next(err);
        });
}
[]