const router = require('express').Router();
const Patient = require('../Controller/regPatient')

router.post('/reg/new',Patient.RegisterPatient);

module.exports= router