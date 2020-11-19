import mongoose from "mongoose";
import config from "config";

const db = config.get("mongoURI");
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export { connectDB };
