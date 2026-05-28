exports.getposts = (req,res,next) =>{
    res.status(200).json({posts : [{title:'book',content: 'Physics'}]});
}

exports.createPost = (req,res,next) =>{

   const title = req.body.title;
   const content = req.body.content;

    res.status(201).json({
        Message : 'Posts created successfully......',
        post : {id: new Date().toISOString(), title : title, content : content}
    });
}