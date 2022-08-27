const router = require('express').Router();
const Doctor = require('../Controller/getDoctor')

router.post('/get/giveall',Doctor.giveAllDocs);

module.exports= router;