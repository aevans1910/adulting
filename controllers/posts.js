const Post = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/user');
const jwt = require("jsonwebtoken");
const user = require('../models/user');
// const Post2 = require('../models/post2');

module.exports = (app) => {

//   app.get('/post/new', (req, res) => {
//     // var currentUser = req.user;
//     let token = req.body.token;
//     let userId 
//   // LOOK UP THE POST
//     jwt.verify(token, process.env.SECRET, (err, decoded) => {
//         if (err) {
//             res.status(401).json({message: err.message})
//             return console.log(err)
//         }
//         userId = decoded._id
//     })
//     res.render('posts-new', { currentUser })
//   });

  // CREATE
  app.post("/post/new", (req, res) => {
    let token = req.body.token;
         let userId 
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                res.status(401).json({message: err.message})
                return console.log(err)
            }
            userId = decoded._id
        })
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
  let token = req.body.token;
  // LOOK UP THE POST
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({message: err.message})
            return console.log(err)
        }
    })
  Post.findById(req.params.id).populate({path:'comments', populate: {path: 'author'}}).populate('author')
      .then(post => {
          res.json({ post, currentUser });  
      })
      .catch(err => {
          console.log(err.message);
      });
});

  // INDEX
  app.get('/', (req, res) => {
      console.log("home is working!")
    let token = req.body.token;
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({message: err.message})
            return console.log(err)
        }
    })
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
    let token = req.body.token;
    // LOOK UP THE POST
      jwt.verify(token, process.env.SECRET, (err, decoded) => {
          if (err) {
              res.status(401).json({message: err.message})
              return console.log(err)
          }
      })
  Post.find({ subreddit: req.params.subreddit }).populate('author')
      .then(posts => {
          res.render("posts-index", { posts, currentUser });
      })
      .catch(err => {
          console.log(err);
      });
});
};