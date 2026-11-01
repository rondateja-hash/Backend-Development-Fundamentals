
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// GET /
app.get("/", (req, res) => {
    res.status(200).send("Welcome to my Node.js and Express server!");
});

// GET /about
app.get("/about", (req, res) => {
    res.status(200).json({
        name: "R.Teja Sree",
        section: "Gen ai 1c"
    });
});

// GET /time
app.get("/time", (req, res) => {
    res.status(200).json({
        currentDateTime: new Date()
    });
});

// 404 handler for unknown routes
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});
