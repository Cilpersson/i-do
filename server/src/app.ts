import express from "express";
import connectDB from "../config/db";
import Guest from "./schema/guestSchema";
import bcrypt from "bcryptjs";
import cors from "cors";

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.get("/guests", async (req, res) => {
  const guests = await Guest.find();
  res.json({ guests });
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password, attending } = req.body;
    const guest = new Guest({
      name,
      email,
      password: bcrypt.hashSync(password),
      attending,
    });
    const saved = await guest.save();
    res.status(201).json(saved);
  } catch (err) {
    res
      .status(400)
      .json({ message: "could not save guest", signUpSuccessful: false });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const guest = await Guest.findOne({ email });
    if (guest && bcrypt.compareSync(password, guest.password)) {
      res.status(201).json({
        id: guest._id,

        name: guest.name,
      });
    } else {
      res.status(404).json({ signInSuccessful: false });
    }
  } catch (err) {
    res.status(400).json({ message: "error", signInSuccessful: false });
  }
});

app.post("/guest", async (req, res) => {
  const { name } = req.body;
  const guest = new Guest({
    name: name,
  });

  try {
    const savedGuest = await guest.save();
    res.status(201).json(savedGuest);
  } catch (err) {
    res.status(400).json({ message: "COULD_NOT_SAVE_GUEST" });
  }
});

const PORT: number | string = process.env.PORT || 3000;
app.listen(+PORT, () => console.log(`app running on port ${PORT}`));
