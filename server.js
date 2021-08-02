const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


// Setting up the express port
const app = express();
const PORT = process.env.PORT || 3001;

// Allowing logger use
app.use(logger("dev"));

// Allowing data parsing for Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Mongoose connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://mongouser:Frediscute123!@cluster0.wkjas.mongodb.net/workout-tracker?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Routes required for HTML and API routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));
app.use(require("./models/workouts"));

// Add listener for PORT
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
