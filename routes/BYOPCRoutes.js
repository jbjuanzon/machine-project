const express = require('express');
const BYOPCController = require('../controllers/createBuildController');

const router = express.Router();

router.get('/', BYOPCController.getFullBuild);
router.get('/create-build', BYOPCController.getBuild)

//router.post('/', BYOPCController.addBuilds);

module.exports = router;