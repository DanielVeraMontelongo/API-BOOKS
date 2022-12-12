const express = require("express");
const cors = require("cors");
const registroLoginRouter = require("./routers/registro-login.router")
const librosRouter = require("./routers/libros.router")
const errorHandling = require("./error/errorHandling");
const PORT = require("./config")
const app = express();

app.set("port", PORT);

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(registroLoginRouter);
app.use(librosRouter);
app.use((req, res, next)=>{
    res.status(404).json({
        error:true,
        codigo: 404,
        mensaje:"Endpoint no encontrado"
    })
})

app.use(errorHandling);

module.exports= app;