const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db'); // Adjust path as needed
const profileController = require('../controllers/profileController.js');
const { ensureAuthenticated } = require('../middleware/auth');
const { AuthController } = require('../controllers/auth.js');

// GET Signup Page
router.get('/signup', (req, res) => {
    if (req.session.user) return res.redirect('/profile');
    res.render('signup');
});


// login Page
router.get('/login', (req, res) => {
    if (req.session.user) return res.redirect('/profile');
    res.render('login');
});

// Signup Route
router.post('/signup', AuthController.signUp);
// Login Route
router.post('/login', AuthController.login);
// Logout Route
router.get('/logout', AuthController.logout);



module.exports = router;