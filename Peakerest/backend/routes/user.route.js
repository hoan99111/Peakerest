import express from "express";
import { test } from "../controllers/user.controller.js";
import User from "../models/user.models.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/create", async (req, res) => {
  const userInformation = req.body;
  console.log(userInformation);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  await User.create({
    displayName: req.body.displayName,
    username: req.body.username,
    email: req.body.email,
    hashedPassword: hashedPassword,
  });

  res.json("User created!!!");
});

router.patch("/update", async (req, res) => {
  const updateUser = await User.find({username:"test"}, req.body)
  res.json(updateUser);
});

router.get("/test", test);

export default router;
