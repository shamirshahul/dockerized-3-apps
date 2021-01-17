import express from "express";
import bodyParser from "body-parser";
import { Guest } from "./entities/Guest";
import { createConnection, Connection } from "typeorm";
import { User } from "./entities/User";
import { Muser } from "./entities/Muser";
import path from "path";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

createConnection({
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: "shamir",
  password: "shamir@123",
  // database: "qr-app-db",
  entities: [Guest, User, Muser],
  synchronize: true,
}).then((connection) => {
  require("./services/qr-services")(app, connection);
  require("./services/user.services")(app, connection);
  require("./services/static.services")(app);
});

app.listen(3000, "0.0.0.0");
