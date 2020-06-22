const Post = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/user');
// const Post2 = require('../models/post2');

module.exports = (app) => {

  app.get('/post/new', (req, res) => {
    var currentUser = req.user;
    res.render('posts-new', { currentUser })
  });

  // CREATE
  app.post("/post/new", (req, res) => {
    if (req.user) {
        var post = new Post(req.body);
        post.author = req.user._id;
        post.save()
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
  
  // SHOW
app.get("/posts/:id", function (req, res) {
  var currentUser = req.user;
  // LOOK UP THE POST

  Post.findById(req.params.id).populate({path:'comments', populate: {path: 'author'}}).populate('author')
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
    // res.render('home', {});
    console.log(req.cookies);
    Post.find().populate('author')
    .then(posts => {
        res.render('posts-index', { posts, currentUser });
        // res.render('home', {});
    }).catch(err => {
        console.log(err.message);
    })
})
  
  // SUBREDDIT
app.get("/n/:subreddit", function (req, res) {
  var currentUser = req.user;
  Post.find({ subreddit: req.params.subreddit }).populate('author')
      .then(posts => {
          res.render("posts-index", { posts, currentUser });
      })
      .catch(err => {
          console.log(err);
      });
});
};