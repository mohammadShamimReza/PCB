import { MongoClient, MongoClientOptions } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const connectionString =
  "mongodb+srv://university-admin:qoh9rsSFGX66UyDx@cluster0.7hla3w5.mongodb.net/pcb?retryWrites=true&w=majority";
const dbName = "pcb"; // Replace with your MongoDB database name
const collectionName = "data"; // Replace with the collection name

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // If 'id' query parameter is present, fetch a specific document
    const id = req.query.id;
    console.log(id);
    if (id) {
      try {
        // Connect to the MongoDB server
        const client = await MongoClient.connect(connectionString, {
          useNewUrlParser: true,
          // @ts-ignore
          useUnifiedTopology: true,
        } as MongoClientOptions);

        // Access the database
        const db = client.db(dbName);

        // Access the collection
        const collection = db.collection(collectionName);

        // Query the collection (find document by 'id' field)
        const data = await collection.findOne({ id: id });
        console.log(data);

        // Close the connection to the database
        client.close();

        if (!data) {
          return res.status(404).json({ error: "Document not found" });
        }

        // Send the result as the response
        res.status(200).json(data);
      } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    } else {
      // If 'id' query parameter is not present, fetch all documents
      try {
        // Connect to the MongoDB server
        const client = await MongoClient.connect(connectionString, {
          useNewUrlParser: true,
          // @ts-ignore
          useUnifiedTopology: true,
        } as MongoClientOptions);

        // Access the database
        const db = client.db(dbName);

        // Access the collection
        const collection = db.collection(collectionName);

        // Query the collection (find all documents)
        const data = await collection.find({}).toArray();

        // Close the connection to the database
        client.close();

        // Send the results as the response
        res.status(200).json(data);
      } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
