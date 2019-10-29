const express = require('express');
const BYOPCController = require('../controllers/createBuildController');

const router = express.Router();

router.get('/', BYOPCController.getFullBuild);
router.get('/create-build', BYOPCController.getBuild)
router.get('/build/delete/:id', BYOPCController.delete);
router.get('/build/edit/:id', BYOPCController.getEditList);

router.post('/', BYOPCController.postAddBuilds);
router.post('/build/update/:id', BYOPCController.postUpdateList);

module.exports = router;