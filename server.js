const express = require("express");
const path = require("path");
const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Ensure correct views path

// Serve static files (CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
    res.render("index", { 
        businessName: "ALAM PAINTING",
        owner: "Abdul Rahman",
        services: [
            "Painting",
            "Remodeling",
            "Fixing Doors",
            "TV Installation",
            "Flooring",
            "General House Work"
        ],
        email: "abrahmanrafi777@gmail.com",
        phone: "773-312-2103",
        location: "Chicago, Skokie, and nearby areas"
    });
});

// Contact Route
app.get("/contact", (req, res) => {
    res.render("contact", {
        businessName: "ALAM PAINTING",
        email: "abrahmanrafi777@gmail.com",
        phone: "773-312-2103"
    });
});

// Handle 404 Errors
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

// Export the app for Vercel
module.exports = app;




