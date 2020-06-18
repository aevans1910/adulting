const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const port = 3000

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home')
});

// POST method route
app.get('/posts/new', (req, res) => {
    res.render('posts-new')
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))