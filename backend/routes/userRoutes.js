import express from "express";
import User from "../models/User.js";

const router = express.Router();
router.post("/add-user", async (req, res) => {
  const data = req.body;
  const newUser = new User(data);
  const newUserData = await newUser.save();
  res.send({
    success: true,
    message: "User Added Successfully",
    data: newUserData,
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userData = await User.findOne({ email: email });
  if (!userData) {
    return res.send({
      success: false,
      message: "Email Or Password Is Invalid",
    });
  }
  const isPasswordMatch = password == userData.password;
  if (!isPasswordMatch) {
    return res.send({
      success: false,
      message: "Email Or Password Is Invalid",
    });
  }
  res.send({ success: true, message: "Login Successfully", data: userData });
});

export default router;
