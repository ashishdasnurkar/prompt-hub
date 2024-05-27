import mongoose from "mongoose";

let isConnected = false;

export const connecttoDB = async () => {
  mongoose.set("stringQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected!");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "prmopthubdb",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected!!!");
  } catch (error) {
    console.log(error);
  }
};
