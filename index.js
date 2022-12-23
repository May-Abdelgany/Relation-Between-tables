import express from "express";
import userRouter from "./modules/users/user.router.js";
import productRouter from "./modules/products/product.router.js";
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(productRouter);
app.get("*", (req, res, next) => {
  res.json({ message: "404 page not found" });
});
app.listen(3000, () => {
  console.log("run server !!!!!!!");
});
