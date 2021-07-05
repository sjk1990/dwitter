import MongoDB from "mongodb";
import { config } from "../config.js";

let db;
export async function connectDB() {
  return MongoDB.MongoClient.connect(config.db.host, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
