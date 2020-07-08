const Post = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/user');
const jwt = require("jsonwebtoken");
const user = require('../models/user');
// const Post2 = require('../models/post2');

module.exports = (app) => {

  // CREATE
  app.post("/post/new", (req, res) => {
    const userId = req.user._id
    User.findById(userId).then(user => {
        if (user) {
            var post = new Post(req.body);
            post.author = user._id;
            post.save()
                .then(post => {
                    user.posts.unshift(post);
                    user.save();
                    // REDIRECT TO THE NEW POST
                    res.status(200).json({postId : post._id});
                })
                .catch(err => {
                    console.log(err.message);
                });
        } else {
            return res.status(401); // UNAUTHORIZED
        }
    })
});
  
  // SHOW
app.get("/posts/:id", function (req, res) {
    const userId = req.user._id
    Post.findById(req.params.id).populate({path:'comments', populate: {path: 'author'}}).populate('author')
        .then(post => {
            res.json({ post });  
        })
        .catch(err => {
            console.log(err.message);
        });
    });

  // INDEX
  app.get('/', (req, res) => {
    console.log("home is working!")
    Post.find().populate('author')
    .then(posts => {
        res.render('posts-index', { posts });
        // res.render('home', {});
    }).catch(err => {
        console.log(err.message);
    })
})
  
  // SUBREDDIT
app.get("/n/:subreddit", function (req, res) {
    const userId = req.user._id
  Post.find({ subreddit: req.params.subreddit }).populate('author')
      .then(posts => {
          res.render("posts-index", { posts });
      })
      .catch(err => {
          console.log(err);
      });
});
};