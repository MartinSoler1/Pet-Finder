import { connectDB } from "../../../../libs/mongoose";
import User from "../../../../models/users";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    try {
      await connectDB();
      const { fullname, email, password } = await request.body;

      if (password.length < 6)
        return response
          .status(400)
          .json({ message: "Password must be at least 6 characters" });

      const userFound = await User.findOne({ email });

      if (userFound)
        return response.status(409).json({
          message: "Email already exists",
        });

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({
        fullname,
        email,
        password: hashedPassword,
      });

      const savedUser = await user.save();
      console.log(savedUser);

      return response.status(201).json({
        fullname,
        email,
        createdAt: savedUser.createdAt,
        updatedAt: savedUser.updatedAt,
      });
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        return response.status(400).json({
          message: error.message,
        });
      } else {
        return response.status(500).json({
          message: "Internal Server Error",
        });
      }
    }
  }
}
