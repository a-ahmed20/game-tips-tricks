const express = require('express');
const { register, login } = require('../controllers/userController');

const router = express.Router();


router.get('/profile/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    const tips = await User.getUserTips(req.params.id);
    res.render('profile', { user, tips });
});

router.post('/register', register);
router.post('/login', login);

module.exports = router;
