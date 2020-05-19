const express = require('express');
const router = express.Router();

/* Main */
router.get('/', function(req, res) {
    res.redirect('/home');
});

router.get('/home', function(req, res) {
    res.render('home');
});

router.get('/about', function(req, res) {
    res.render('about');
});

router.get('/about/history', function(req, res) {
    res.render('about-history');
});

router.get('/about/join', function(req, res) {
    res.render('about-joinUs');
});

router.get('/products', function(req, res) {
    res.render('products');
});

module.exports = router;