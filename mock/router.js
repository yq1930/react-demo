const express = require("express");
const router = express.Router();

router.get("/api/list", (req, res) => {
  res.send([
    {
      id: 1,
      name: "小米",
      age: 10,
    },
    {
      id: 2,
      name: "华为",
      age: 20,
    },
  ]);
});

module.exports = router;
