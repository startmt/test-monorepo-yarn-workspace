import express from "express";
import routes from "./routes";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
// Create a new express application instance
const app: express.Application = express();
mongoose.connect("mongodb://localhost:27017");

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

app.use(bodyParser.json());
app.use(cors());
app.use(routes);
