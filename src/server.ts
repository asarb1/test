import express from "express";
import cors from "cors";
import {listaPortofolii} from "./portofolii"

const app = express();
app.use(cors({
  credentials:true,
  origin:["http://localhost:4200"]
}));

app.get("/api/portofoliu", (req, res) => {
  res.send(listaPortofolii);
});

app.get("/api/portofoliu/:portofoliuId", (req, res) => {
  const portofoliuId = req.params.portofoliuId;
  const portofoliu = listaPortofolii.find(portofoliu => portofoliu.id === portofoliuId);
  res.send(portofoliu);
});



const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
