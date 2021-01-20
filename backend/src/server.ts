import express from "express";
import AuthRoutes from "./routes/Auth";
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/auth", AuthRoutes);
app.get("/", (_req, res) => {
  res.send("Ok");
});
// app.post("/", (req, res) => {
//   console.log("BOdy", req.body);
//   res.send("Hello from post");
// });

// 100  informacion
// 200 todo esta ok
// 300 redirect
// 400 Errores de cliente
// 500 Problemas en el servidor interno
app.listen(3002, () => {
  console.log("Server is live on port 3002");
});
