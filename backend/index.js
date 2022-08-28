const express = require('express');
const app = express();  
const DB = require('./Config/DataBase.connect.js');
const PORT = 8080;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
DB("test1");
const userApi = require('./Routes/Routes.User')
const docApi = require('./Routes/Routes.Doctor')
const patApi = require('./Routes/Routes.Patient')

app.get('/', (req, res) => {
    res.send('<h1>Server is Up!!<hr/></h1>');
});
app.use('/api/user/',userApi);
app.use('/api/doctor/',docApi);
app.use('/api/patient/',patApi);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});