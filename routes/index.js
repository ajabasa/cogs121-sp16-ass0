var models = require('../models');

exports.view = function(req, res) {
    models.Message
        .find()
        .exec(displayMessages);
    
    function displayMessages(err, message_posts){
        console.log(message_posts);

        var data = {data: message_posts};
        res.render("index", data);
    }
}
