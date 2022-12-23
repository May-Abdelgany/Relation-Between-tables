import { Router } from "express";
import {
  AddUser,
  AllUsers,
  deleteUser,
  getuser,
  getusersBetween,
  updateuser,
  userEndWith,
  userStartWith,
  getUsers,
  users,
  login,
} from "./controller/user.js";
const router = Router();
router.post("/login", login);
router.get("/allUsers", AllUsers);
router.post("/signUp", AddUser);
router.put("/updateUser/:id", updateuser);
router.delete("/deleteUser/:id", deleteUser);
router.get("/usersStartWith", userStartWith);
router.get("/usersEndWith", userEndWith);
router.get("/user/:id", getuser);
router.get("/allUsersBetween", getusersBetween);
router.get("/userByCondition", getUsers);
router.get("/users", users);
export default router;
