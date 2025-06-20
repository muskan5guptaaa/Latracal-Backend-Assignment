const express = require("express");
const { getAllBooks, getBookById, createBook } = require("../controllers/bookController");
const { auth, adminOnly } = require("../middlewares/auth");
const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", auth, adminOnly, createBook);

module.exports = router;
