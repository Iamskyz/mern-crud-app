import connectDB from "../backend/config/db.js";
import User from "../backend/models/User.js";

export default async function handler(req, res) {

  await connectDB();

  if (req.method === "GET") {
    const users = await User.find();
    return res.json(users);
  }

  if (req.method === "POST") {
    const user = await User.create(req.body);
    return res.json(user);
  }

}