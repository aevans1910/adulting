const Post = require('../models/post');
const User = require('../models/user');
const Comment = require("../models/comment")

module.exports = function(app) {
   // CREATE Comment
    app.post("/posts/:postId/comments", function(req, res) {
        // INSTANTIATE INSTANCE OF MODEL
        const comment = new Comment(req.body);
        comment.author = req.user._id
        console.log("Did comment show: ",comment)
        // SAVE INSTANCE OF Comment MODEL TO DB
        comment
        .save()
        .then(comment => {
            // REDIRECT TO THE ROOT
            return res.redirect(`/`);
        })
        .catch(err => {
            console.log(err);
        });
    });
};