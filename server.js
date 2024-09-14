const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const connectDb = require('./config/db')


connectDb();

// Define a route
app.get("/", (req, res) => {
    console.log("Request received at root route");
    res.send("Running application");
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started on port: ${PORT}`);
});  