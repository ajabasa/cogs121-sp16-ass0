var models = require('../models');

exports.send = function(req, res){
    console.log(req.body);//help you see what is inside of req.body
    //your solution here
    var content = {};
    content.email = req.body.email;
    content.content = req.body.content;
    content.created = new Date();
    var newPost = new models.Message(content);
    newPost.save(afterSaving);
    
    function afterSaving(err){ //this is a callback
        if(err){console.log(err); res.send(500); return;}
        res.redirect('/'); //redirect to home
    }
};
