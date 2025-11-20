import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 3333;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas principais
app.use(routes);

// Healthcheck
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Start
app.listen(PORT, () => {
  console.log(`role-api rodando na porta ${PORT}`);
});
