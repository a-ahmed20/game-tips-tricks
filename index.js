const express = require('express');
const cors = require('cors');
const Tip = require('./models/Tips');

const userRoutes = require('./Routes/user');
const tipRoutes = require('./Routes/tips');

const bodyParser = require('body-parser');

const app = express();

// ✅ Set PUG as the templating engine
app.set('view engine', 'pug');
app.set('views', './views'); // Ensure PUG templates are found

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/tips', tipRoutes);

app.get('/', async (req, res) => {
    try {
        const tips = await Tip.getAll(); // ✅ Correct reference to Tip model
        res.render('index', { tips });
    } catch (error) {
        console.error("Error fetching tips:", error);
        res.status(500).send("Server Error");
    }
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
