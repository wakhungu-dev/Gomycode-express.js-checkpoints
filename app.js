const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const { checkWorkingHours } = require("./checkWorkingHours");

// set the view engine to pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

app.use(checkWorkingHours);

// routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home page" });
});

app.get("/services", (req, res) => {
  res.render("services",{title: "Services"});
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
