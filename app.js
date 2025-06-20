const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

app.use("/books", bookRoutes);
app.use("/reviews", reviewRoutes);
app.use("/users", userRoutes);

app.use(errorHandler);

module.exports = app;
