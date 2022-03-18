const express = require('express');
// crear el ervidor
const cors = require('cors');

const path = require("path");

const app = express();
var bodyParser = require('body-parser');
const PORT  = process.env.PORT || 4000;
app.use(cors())


app.use(cors());
app.use(bodyParser.json());
app.use(express.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use('/api', require('./routes/apolo'));


app.listen(PORT, () => {
    console.log(`el servidor esta funcionando en el puerto ${PORT} `);
})


