const router = require('express').Router();
const savePatient = require('../Controller/savePatient')
const getPatient = require('../Controller/getPat')
const updatePatient = require('../Controller/edit')
const deletePatient = require('../Controller/delete')

router.post('/save',savePatient.savePatient);
router.post('/getAll',getPatient.getPatient);
router.post('/update/edit',updatePatient.editApp);
router.post('/update/delete',deletePatient.deleteApp);

module.exports= router;