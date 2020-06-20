const Post = require('../models/post');
const Comment = require('../models/comment');
// const User = require('..models/user');

module.exports = (app) => {


// CREATE
    app.post("/posts/new", (req, res) => {
        if (req.user) {
            var post = new Post(req.body);
  
    post.save(function(err, post) {
        return res.redirect(`/`);
      });
    } else {
      return res.status(401); // UNAUTHORIZED
    }
  });
    
    app.get('/posts/new', (req, res) => {
        const currentUser = req.user;
        return res.render(`posts-new`, { currentUser });
    });
  
    app.get("/posts/:id", function(req, res) {
        // LOOK UP THE POST
        const currentUser = req.user;
        Post.findById(req.params.id).populate('comments').lean().then(post => {
            res.render("posts-show", { post,currentUser });
        })
        .catch(err => {
            console.log(err.message);
        });
    });

    app.get("/", (req, res) => {
        console.log("dis thing on")
        const currentUser = req.user;

        Post.find({})
            .then(posts => {
            res.render("posts-index", { posts, currentUser });
            })
            .catch(err => {
                console.log(err.message);
            });
    });

      // SUBREDDIT
    app.get("/n/:subreddit", function(req, res) {
        const currentUser = req.user;
        Post.find({ subreddit: req.params.subreddit })
        .then(posts => {
        res.render("posts-index", { posts, currentUser });
        })
        .catch(err => {
        console.log(err);
        });
    });


    // CREATE Comment
    app.post("/posts/:postId/comments", function(req, res) {
        // INSTANTIATE INSTANCE OF MODEL
        const comment = new Comment(req.body);
    
        // SAVE INSTANCE OF Comment MODEL TO DB
        comment
            .save()
            .then(comment => {
                return Post.findById(req.params.postId);
        })
            .then(post => {
                post.comments.unshift(comment);
                return post.save();
        })
            .then(post => {
                res.redirect(`/`);
        })
            .catch(err => {
                console.log(err);
        });
    });

};