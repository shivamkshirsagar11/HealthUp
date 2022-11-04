const router = require('express').Router();
const savePatient = require('../Controller/savePatient')
const getPatient = require('../Controller/getPat')
const updatePatient = require('../Controller/edit')
const deletePatient = require('../Controller/delete');
const { getPendingApp, getAllApp } = require('../Controller/pendingApp');

router.post('/save',savePatient.savePatient);
router.post('/getAll',getPatient.getPatient);
router.post('/update/edit',updatePatient.editApp);
router.post('/update/edit/admin',updatePatient.editAppAdmin);
router.post('/update/delete',deletePatient.deleteApp);
router.post('/update/delete/admin',deletePatient.deleteAppAdmin);
router.post('/get/pending',getPendingApp);
router.post('/get/all',getAllApp);
router.post('/get/all/fromuser',getPatient.getPatientAll);

module.exports= router;