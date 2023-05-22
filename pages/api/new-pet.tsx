//api/new-pet
//POST /api/new-pet
import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = req.body;
    const user = process.env.DB_USER;
    const password = process.env.DB_PASS;
    const client = await MongoClient.connect(
      `mongodb+srv://${user}:${password}@petfinderapp.yitpwio.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db();
    const petsCollection = db.collection("pets");
    const result = await petsCollection.insertOne(data);
    client.close();

    res.status(201).json({ message: "Pet inserted!" });
  }
}

export default handler;
