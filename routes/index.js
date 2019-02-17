
// route each pages
// FIle name: index.js
// Name: Dongwan Kim
// Student id: 300932262
// Date: Feb 16th, 2019

let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next){
    res.render('index',{title: "Home"});
})
router.get('/about', function(req, res, next){
    res.render('about/index',{title: "Hi, this is about me page"});
})
router.get('/projects', function(req, res, next){
    res.render('project/index',{title: "Hi, this is projects page"});
})
router.get('/services', function(req, res, next){
    res.render('service/index',{title: "Hi, this is services page"});
})
router.get('/contacts', function(req, res, next){
    res.render('contact/index',{title: "Hi, this is contacts page"});
})
module.exports = router;