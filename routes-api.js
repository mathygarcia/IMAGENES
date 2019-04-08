const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
     miprimerApi: "works!"
  });
});

module.exports = router;
