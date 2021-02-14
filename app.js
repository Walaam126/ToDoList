const db = require("./db/models");
const express = require("express");
const todoRoutes = require("./routes/todo");
const cors = require("cors");
const app = express();
app.use(cors());

app.use("/todo", todoRoutes);



app.use((req, res, next) => {
    const error = new Error("Path Not Found");
    error.status = 404;
    next(error);
});
  
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ message: err.message || "Internal Server Error" });
});

db.sequelize.sync();
//db.sequelize.sync({alter:true});
//db.sequelize.authenticate();
app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
});