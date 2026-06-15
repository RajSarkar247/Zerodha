require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");
const authMiddleware = require("./middleware/authMiddleware");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/allHoldings", authMiddleware, async (req, res) => {
  let allHoldings = await HoldingsModel.find({
    userId: req.user.userId,
  });
  res.json(allHoldings);
});

app.get("/allPositions", authMiddleware, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", authMiddleware, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // Save order
    const newOrder = new OrdersModel({
      userId: req.user.userId,
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();

    // Find existing holding
    let holding = await HoldingsModel.findOne({
      userId: req.user.userId,
      name,
    });

    // BUY
    if (mode === "BUY") {
      if (holding) {
        const oldQty = holding.qty;
        const oldAvg = holding.avg;

        const newQty = oldQty + Number(qty);

        const newAvg = (oldQty * oldAvg + Number(qty) * Number(price)) / newQty;

        holding.qty = newQty;
        holding.avg = Number(newAvg.toFixed(2));
        await holding.save();
      } else {
        await HoldingsModel.create({
          userId: req.user.userId,
          name,
          qty: Number(qty),
          avg: Number(price),
          price: Number(price),
          net: "0%",
          day: "0%",
        });
      }
    }

    // SELL
    else if (mode === "SELL") {
      if (!holding) {
        return res.status(400).json({
          success: false,
          message: "No holding found",
        });
      }

      if (holding.qty < Number(qty)) {
        return res.status(400).json({
          success: false,
          message: "Insufficient quantity",
        });
      }

      holding.qty -= Number(qty);

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ _id: holding._id });
      } else {
        await holding.save();
      }
    }

    res.status(200).json({
      success: true,
      message: "Order placed successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.get("/allOrders", authMiddleware, async (req, res) => {
  console.log("Logged User:", req.user.userId);
  let allOrders = await OrdersModel.find({
    userId: req.user.userId,
  });
  console.log("Orders Found:", allOrders);
  res.json(allOrders);
});

//Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "Account created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

//Login Route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    console.log("Login User:", user.email);
    console.log("Login User ID:", user._id);
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.listen(PORT, () => {
  console.log("App is listening");
});
