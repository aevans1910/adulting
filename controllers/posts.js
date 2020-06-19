const Post = require('../models/post');
// const Post2 = require('../models/post2');

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.render('home')
  });

  // CREATE
  app.post('/posts/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB
    post.save((err, post) => {
      // REDIRECT TO THE ROOT
      return res.redirect(`/index`);
    })
  });
  
  app.get('/posts/new', (req, res) => {
      return res.render(`posts-new`);
  });
  
  // app.post('/posts2/new', (req, res) => {
  //   // INSTANTIATE INSTANCE OF POST MODEL
  //   const post = new Post2(req.body);

  //   // SAVE INSTANCE OF POST MODEL TO DB
  //   post.save((err, post) => {
  //     // REDIRECT TO THE ROOT
  //     return res.redirect(`/`);
  //   })
  // });
  
  app.get("/posts/:id", function(req, res) {
    // LOOK UP THE POST
    Post.findById(req.params.id).lean()
      .then(post => {
        res.render("posts-show", { post });
      })
      .catch(err => {
        console.log(err.message);
      });
  });

  app.get("/index", (req, res) => {
      console.log("dis thing on")
  Post.find({}).lean()
  .then(posts => {
    console.log("le promise", posts)
    res.render("posts-index", { posts });
  })
  .catch(err => {
    console.log(err.message);
  });
})

};