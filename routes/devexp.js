const express = require("express");
const router = express.Router();
const devexperienceController = require("../controllers/devexp");

router.get('/', devexperienceController.selectDevExperience);

router.post('/', devexperienceController.postDevExperience);

router.delete('/:id', devexperienceController.deleteDevExperience);

router.put('/:id', devexperienceController.updateDevExperience);

module.exports = router;