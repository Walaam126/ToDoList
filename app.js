const db = require("./db/models");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
});


//db.sequelize.sync();
db.sequelize.authenticate();