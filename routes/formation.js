const express = require("express");
const router = express.Router();
const formationController = require("../controllers/formation");


router.get('/', formationController.selectFormation);

router.post('/', formationController.postFormation);

router.delete('/:id', formationController.deleteFormation);

router.put('/:id', formationController.updateFormation);

module.exports = router;