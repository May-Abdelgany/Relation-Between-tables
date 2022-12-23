import { Router } from "express";
import {
  add,
  allProducts,
  product,
  products,
  updateProduct,
  deleteProduct,
  myProducts,
  search,
  mySearch
} from "./controller/product.js";
const router = Router();

router.post("/addProduct", add);
router.get("/allProducts", allProducts);
router.get("/product/:id", product);
router.get("/myProduct/:id", myProducts);
router.get("/products", products);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/productsStartWith", search);
router.get("/myProductsStartWith/:id", mySearch);
export default router;
