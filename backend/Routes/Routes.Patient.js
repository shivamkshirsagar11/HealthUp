const router = require('express').Router();
const savePatient = require('../Controller/savePatient')
const getPatient = require('../Controller/getPat')

router.post('/save',savePatient.savePatient);
router.post('/getAll',getPatient.getPatient);

module.exports= router;