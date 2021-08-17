const express = require("express");
const router = express.Router();
const hardController = require("../controllers/hard");

router.get('/', hardController.selectHard);

router.post('/', hardController.postHard);

router.delete('/:id', hardController.deleteHard);

router.put('/:id', hardController.updateHard);

module.exports = router;