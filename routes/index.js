const express = require('express');
const router = express.Router();

/* Main */
router.get('/', function(req, res) {
    res.redirect('/home');
});

router.get('/home', function(req, res) {
    res.render('home', {pageName: "home"});
});

router.get('/about', function(req, res) {
    res.render('about', {pageName: "about"});
});

router.get('/about/history', function(req, res) {
    res.render('about-history', {pageName: "about-history"});
});

router.get('/about/join', function(req, res) {
    res.render('about-joinUs', {pageName: "about-join"});
});

router.get('/products', function(req, res) {
    res.render('products', {pageName: "products"});
});

router.get('/team', function(req, res) {
    res.render('team', {pageName: "team"});
});

router.get('/contact', function(req, res) {
    res.render('contact', {pageName: "contact"});
});

module.exports = router;