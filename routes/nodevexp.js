const express = require("express");
const router = express.Router();
const noexperienceController = require("../controllers/nodevexp");

router.get('/', noexperienceController.selectNoExperience);

router.post('/', noexperienceController.postNoExperience);

router.delete('/:id', noexperienceController.deleteNoExperience);

router.put('/:id', noexperienceController.updateNoExperience);

module.exports = router;