const router = require("express").Router();
const Users = require("./users-model");
const Posts = require("../posts/posts-model");
const Comments = require("../comments/comments-model");
const restricted = require("../auth/restricted-middleware");

router.get("/", restricted, async (req, res) => {
  Users.getAllUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", restricted, async (req, res) => {});

function validateEditContent(req, res, next) {
  if (
    req.body.email === "" ||
    req.body.email === null ||
    req.body.password === "" ||
    req.body.password === null ||
    req.body.username === "" ||
    req.body.username === null
  ) {
    res.status(400).json({
      message: "Email, password, and username fields cannot be empty.",
    });
  } else {
    next();
  }
}

function verifyUserId(req, res, next) {
  const id = req.params.id;

  Users.getUserById(id)
    .then((item) => {
      if (item) {
        req.item = item;
        next();
      } else {
        res.status(404).json({ message: "User Not Found." });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

module.exports = router;
