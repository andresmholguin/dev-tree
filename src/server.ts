import express from "express";
import router from "./router";
import { connectDB } from "./config/db";

const app = express();

/** Conectar a la base de datos */
connectDB();

/** Leer datos de formulario */
app.use(express.json());

app.use("/", router);

export default app;
