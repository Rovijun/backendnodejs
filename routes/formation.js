const express = require("express");
const router = express.Router();
const Formation = require("../models/Formation");
const formationController = require("../controllers/formation");


router.get('/', formationController.selectFormation);

router.post('/', formationController.postFormation);

router.delete('/:id', formationController.deleteFormation);

router.put('/:id', formationController.updateFormation);

module.exports = router;