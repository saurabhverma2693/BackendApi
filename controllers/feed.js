const {validationResult} = require('express-validator');

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

    if(!errors.isEmpty()){
        return res.status(422).json({message: 'validation failed,enter data is incorrect',
            errors : errors.array()
        });
    }

    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        Message: 'Posts created successfully......',
        post: {
            _id: new Date().toISOString(),
            title: title,
            content: content,
            creator: {
                name: 'Saurabh Verma'
            },
            createdAt: new Date()
        }
    });
}

[]