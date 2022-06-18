const express = require("express");
const cors = require("cors");
const app = express();

const db_name = "gpportfolioDB";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./config/mongoose.config")(db_name);
require("./routes/portfolio.routes")(app);

app.listen(8000, () => console.log("Listening on port 8000"));
