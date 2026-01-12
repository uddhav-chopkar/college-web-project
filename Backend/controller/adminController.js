import adminModel from "../model/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
export const adminRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let admins = await adminModel.find();
    if (admins.length > 2)
      return res.status(401).json({ message: "unautharization" });

    let isAdmin = await adminModel.findOne({ email });
    if (isAdmin)
      return res.status(401).json({ message: "admin already exist" });

    const hash = await bcrypt.hash(password, 10);

    await adminModel.create({
      name,
      email,
      password: hash,
    });
    res.status(201).json({ message: "admin register" });
  } catch (error) {}
};

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isValid = await adminModel.findOne({ email });
    if (!isValid) return res.status(401).json({ message: "invalid email" });

    const ispass = await bcrypt.compare(password, isValid.password);
    if (!ispass) return res.status(401).json({ message: "incorrect password" });

    const token = jwt.sign({ email }, "jwefgwjfgwejgf", { expiresIn: "2d" });
    res.cookie("token", token);
    res.status(200).json({ message: "Login successful", token }); 
  } catch (error) {
    res.status(501).json({ message: "server not responding", error });
  }
};

export const adminDashboard = async (req, res) => {
  res.send("welcome to dashboaard");
};
