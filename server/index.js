const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser') 

let app = express();
app.use(bodyParser.json());

const port = 4000;
app.listen(port, ()=>console.log(`The Daelaam wait for your action on port ${port}, executor.`))