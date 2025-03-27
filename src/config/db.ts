import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async () => {
  try {
    const conection = await mongoose.connect(process.env.MONGO_URI);

    const url = `${conection.connection.host}:${conection.connection.port}`;
    console.log(url);
    console.log(colors.bgCyan.green.bold("MongoDB connected"));
  } catch (error) {
    console.log(colors.bgRed.white.bold(error.message));
    process.exit(1);
  }
};
