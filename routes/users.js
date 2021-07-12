var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(203).send({ id: 12221, name: "avocado" });
});

router.post("/save", function (req, res) {
  console.log("收到请求体：", req.body);
  res.status(201).send("保存成功");
});

module.exports = router;
