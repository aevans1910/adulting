const Post = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/user');

module.exports = (app) => {

    app.get("/token-route", (req, res) => {
        return res.json(req.user)
    })

    // CREATE
    app.post("/post/new", (req, res) => {
        if (req.user) {
            var post = new Post(req.body);
            post.author = req.user._id;
            post.upVotes = [];
            post.downVotes = [];
            post.voteScore = 0; 

            post
                .save()
                .then(post => {
                    return User.findById(req.user._id);
                })
                .then(user => {
                    user.posts.unshift(post);
                    user.save();
                    // REDIRECT TO THE NEW POST
                    res.redirect(`/posts/${post._id}`);
                })
                .catch(err => {
                    console.log(err.message);
                });
        } else {
            return res.status(401); // UNAUTHORIZED
        }
    });
    
    app.get('/post/new', (req, res) => {
        const currentUser = req.user;
        return res.render(`posts-new`, { currentUser });
    });
  
    // SHOW
    app.get("/posts/:id", function(req, res) {
        var currentUser = req.user;
        // LOOK UP THE POST
        Post.findById(req.params.id).populate('comments').lean()
            .then(post => {
                res.render("posts-show", { post, currentUser });
        })
        .catch(err => {
            console.log(err.message);
        });
    });

// INDEX
    app.get('/', (req, res) => {
        var currentUser = req.user;
        Post.find({}).populate('author')
        .then(posts => {
            res.render('posts-index', { posts, currentUser });
            
        }).catch(err => {
            console.log(err.message);
        })
    })

      // SUBREDDIT
    app.get("/n/:subreddit", function(req, res) {
        var currentUser = req.user;
        Post.find({ subreddit: req.params.subreddit }).lean()
        .then(posts => {
        res.render("posts-index", { posts, currentUser });
        })
        .catch(err => {
        console.log(err);
        });
    });

    // FETCH USER
    app.get("/users/:username", (req, res) => {
        const currentUser = req.user;
        User.findOne({username:req.params.username}).populate("posts")
        .then(user => {
            const posts = user.posts;
            return res.render("posts-index", {currentUser, posts})
        })
        .catch(err => {
            console.log(err);
        });
    
    })

    // UP VOTE POSTS
    app.put("/posts/:id/vote-up", function(req, res) {
        Post.findById(req.params.id).exec(function(err, post) {
          post.upVotes.push(req.user._id);
          post.voteScore = post.voteScore + 1;
          post.save();
      
          res.status(200);
        });
      });
      
    //   DOWN VOTE POSTS
      app.put("/posts/:id/vote-down", function(req, res) {
        Post.findById(req.params.id).exec(function(err, post) {
          post.downVotes.push(req.user._id);
          post.voteScore = post.voteScore - 1;
          post.save();
      
          res.status(200);
        });
      });
};