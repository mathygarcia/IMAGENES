const express = require("express");
const morgan = require("morgan");
const app = express();

//requerimientos de rutas
const routes = require("./routes");
const routesApi = require("./routes-api");
//settings
app.set("appName", "Mi 1º server");
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//middlewre
app.use(morgan("short"));

//rutas
app.use(routes);
app.use("/api",  routesApi);

app.get("*", (req, res) => {
  res.end("archivo no encontrado!");
});

app.listen(3000, function ()  {
  console.log("¡servidor funcionando!")
  console.log("nombre de la APP: ", app.get("appName"));
});
