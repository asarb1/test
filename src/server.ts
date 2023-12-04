import express from "express";
import cors from "cors";
import {listaPortofolii} from "./portofolii"

const app = express();
app.use(cors({
  credentials:true,
  origin:["http://localhost:4200"]
}));

app.get("/api/home", (req, res) => {
  res.send(listaPortofolii);
});

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
