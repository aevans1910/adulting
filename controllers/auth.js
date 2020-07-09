const User = require("../models/user");
const jwt = require('jsonwebtoken');

module.exports = app => {
    // LOGOUT
    app.get('/log-out', (req, res) => {
        res.clearCookie('nToken');
        res.redirect('/');  
    });

    // LOGIN
    app.post("/log-in", (req, res) => {
        const username = req.body.email; // check for the rest of these
        const password = req.body.password;
        // Find this user name
        console.log(req.body)
        console.log("user name", username)
        console.log("user password", password)

        User.findOne({ username }, "username password")
        .then(user => {
            if (!user) {
            // User not found
            return res.status(401).send({ message: "Wrong Username or Password" });
            }
            // Check the password
            user.comparePassword(password, (err, isMatch) => {
            if (!isMatch) {
                // Password does not match
                return res.status(401).send({ message: "Wrong Username or password" });
            }
            // Create a token
            const token = jwt.sign({ _id: user._id, username: user.username }, process.env.SECRET, {
                expiresIn: "60 days"
            });
            // Set a cookie and redirect to root
            res.json({token})
            });
        })
        .catch(err => {
            console.log(err);
        });
    });

    // SIGN UP POST
    app.post("/sign-up", (req, res) => {
        // Create User and JWT
        const user = new User(req.body);
    
        user.save().then((user) => {
            var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
            res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
            res.send({token:token})
        })
        .catch(err => {
            console.log(err.message);
            return res.status(400).send({ err: err });
        });
    });
};