const express = require('express');
const Tip = require('../models/Tips'); // ✅ Import the Tip model
const { addTip, getAllTips } = require('../controllers/tipController');

const router = express.Router();

// Get all tips and render PUG template
router.get('/', async (req, res) => {
    try {
        const tips = await Tip.getAll();
        res.render('tips', { tips });
    } catch (error) {
        console.error("Error fetching tips:", error);
        res.status(500).send("Server Error");
    }
});

// Get a single tip with comments
router.get('/:id', async (req, res) => {
    try {
        const tip = await Tip.getById(req.params.id);
        const comments = await Tip.getComments(req.params.id);
        res.render('tip-detail', { tip, comments });
    } catch (error) {
        console.error("Error fetching tip:", error);
        res.status(500).send("Server Error");
    }
});

// Add a new tip
router.post('/add', async (req, res) => {
    try {
        const { user_id, title, description, category } = req.body;
        await Tip.create(user_id, title, description, category);
        res.redirect('/tips');
    } catch (error) {
        console.error("Error adding tip:", error);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
