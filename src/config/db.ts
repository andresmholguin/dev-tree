import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const url =
      "mongodb+srv://root:sReKaXrcO7FLNOik@cluster0.wqfbfii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const conection = await mongoose.connect(url);

    const url2 = `${conection.connection.host}:${conection.connection.port}`;
    console.log(url2);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
