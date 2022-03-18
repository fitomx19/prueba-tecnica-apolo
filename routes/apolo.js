const express = require('express');
const router = express.Router();
const apoloController =require('../controllers/apolo');



router.get(
    "/",
    apoloController.index
  );
router.get(
    "/getToken",
    apoloController.getToken
);

router.get(
    "/getKeyWords",
    apoloController.getKeyWords
);

router.get(
    "/addKeyWords",
    apoloController.addKeyWords
);

module.exports = router;