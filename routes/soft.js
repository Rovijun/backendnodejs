const express = require("express");
const router = express.Router();
const softController = require("../controllers/soft");

router.get('/', softController.selectSoft);

router.post('/', softController.postSoft);

router.delete('/:id', softController.deleteSoft);

router.put('/:id', softController.updateSoft);

module.exports = router;