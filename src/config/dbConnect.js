import mongoose from "mongoose";

mongoose.connect("mongodb+srv://crismai:123@api-livraria.qwyhv9q.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;