const express = require('express');
const cors = require('cors');
const app = express();
const db_name = "petsDB";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('../config/mongoose.config')(db_name); 
require('../routes/pets.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
