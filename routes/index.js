var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile("public/index.html", {
    root: "./",
  });
});

router.get("/index.html", function (req, res, next) {
  res.sendFile("public/index.html", {
    root: "./",
  });
});

router.get("/about-us.html", function (req, res, next) {
  res.sendFile("public/about-us.html", {
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

router.get("/events.html", function (req, res, next) {
  res.sendFile("public/events.html", {
    root: "./",
  });
});

router.get("/order-online.html", function (req, res, next) {
  res.sendFile("public/order-online.html", {
    root: "./",
  });
});

router.get("/catering.html", function (req, res, next) {
  res.sendFile("public/catering.html", {
    root: "./",
  });
});

// router.get("/franchise.html", function (req, res, next) {
//   res.sendFile("public/franchise.html", {
//     root: "./",
//   });
// });

router.get("/contact.html", function (req, res, next) {
  res.sendFile("public/contact.html", {
    root: "./",
  });
});

module.exports = router;
