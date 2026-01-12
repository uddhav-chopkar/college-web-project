import express from "express";
import {
  adminRegister,
  adminLogin,
  adminDashboard,
} from "../controller/adminController.js";

const router = express.Router();

router.post("/register", adminRegister);
router.post("/login", adminLogin);
router.get("/dashboard", adminDashboard);

export default router;
