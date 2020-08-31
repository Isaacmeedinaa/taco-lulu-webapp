var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile("public/index.html", {
    root: "./",
  });
});

router.get("/home.html", function (req, res, next) {
  res.sendFile("public/index.html", {
    root: "./",
  });
});

router.get("/about.html", function (req, res, next) {
  res.sendFile("public/about.html", {
    root: "./",
  });
});

router.get("/our-menu.html", function (req, res, next) {
  res.sendFile("public/our-menu.html", {
    root: "./",
  });
});

router.get("/gallery.html", function (req, res, next) {
  res.sendFile("public/gallery.html", {
    root: "./",
  });
});

router.get("/franchise.html", function (req, res, next) {
  res.sendFile("public/franchise.hmtl", {
    root: "./",
  });
});

router.get("/contact.html", function (req, res, next) {
  res.sendFile("public/contact.html", {
    root: "./",
  });
});

module.exports = router;
