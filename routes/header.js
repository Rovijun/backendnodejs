const express = require("express");
const router = express.Router();
const headerController = require("../controllers/header");


router.get('/', headerController.selectHeader);

router.put('/:id', headerController.updateHeader);

module.exports = router;