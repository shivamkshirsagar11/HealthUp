const router = require('express').router();
const Patient = require('../Controller/Controller.Reg.Patient')

router.post('/reg/new',Patient.RegisterPatient);

export default router